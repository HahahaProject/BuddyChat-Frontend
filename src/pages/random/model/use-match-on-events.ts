// package
import { useEffect, useState } from "react";
// layer
import { randomMatch } from "@/entities/socket-random-match";
import { useSocketConnection } from "@/shared/store/use-socket-connection";
import { roomAlert } from "@/entities/socket-room-alert";
import { chatMessage } from "@/entities/socket-chat-message";
import { useMergeList } from "@/shared/store/use-merge-list";
import { roomLeave } from '@/entities/socket-room-leave';

type Match = boolean | null;

type MatchOnEventsReturn = {
  match: Match;
  waiting: boolean;
  startMatch: () => void;
  cancelMatch: () => void;
};

/**
 * @fileoverview
 * - 서버 수신 핸들러 (매치시간 초과, 룸 알람, 채팅 메세지)
 * - 서버 송신 핸들러 (매치시작, 매치취소)
 */

const useMatchOnEvents = (): MatchOnEventsReturn => {
  const [match, setMatch] = useState<Match>(null);
  const [waiting, setWaiting] = useState<boolean>(false);

  const { socket, socketAction } = useSocketConnection();
  const mergeAction = useMergeList((state) => state.action);
  const isRoom = useMergeList((state) => state.isRoom);
  const checkRoom = useMergeList( state => state.action.checkRoom);
  const { sendRoomLeave } = roomLeave(socket);

  const { connectMatch,disconnectMatch,receiveMatchTimeout,removeListener: randomMatchRemove} = randomMatch(socket);
  const { receiveRoomAlert, removeListener: roomAlertRemove } =roomAlert(socket);
  const { receiveChatMessage, removeListener } = chatMessage(socket);

  const handleBeforeUnload = () => {
    socket?.removeAllListeners();
    sendRoomLeave();
  };

  const startMatch = () => {
    if(!socket){
      // socketAction.connect("/random"); // loacl
      socketAction.connect("/"); // server
      return;
    }
    connectMatch((res) => {
      if (res.status === 201) {
        setWaiting(true);
        setMatch(false);
      }
    });
  };

  // 채팅 시작여부 useEffect
  useEffect(()=>{
    if(!socket) return;
    if(!isRoom){
      startMatch();
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      sendRoomLeave();
      checkRoom();    
      socket.removeAllListeners();
      window.addEventListener("beforeunload", handleBeforeUnload);
    }
  },[socket])

  const cancelMatch = () => {
    setMatch(null);
    disconnectMatch((res) => {
      if (res.status === 204) setWaiting(false);
    });
  };


  useEffect(() => {
    if (!socket) return;
  
    receiveMatchTimeout((res) => {
      const { data } = res;
      switch (data.type) {
        case "timeout":
          setMatch(false);
          setWaiting(false);
          break;
        default:
          console.warn("cannot find the receiveMatchTimeout type");
      }
    });

    receiveRoomAlert((res) => {
      const { data } = res;
      switch (data.type) {
        case "join":
          if (!isRoom) mergeAction.reSet();
          mergeAction.checkRoom();
          mergeAction.saveAlert(data);
          setMatch(true);
          break;
        case "out":
          console.log("룸아웃")
          mergeAction.saveAlert(data);
          mergeAction.checkRoom();
          break;
        case "midnight":
          // 자정 시간 형식 대기
          break;
        default:
          console.warn("cannot find the reciveRoomAlert type");
      }
    });

    receiveChatMessage((res) => {
      const { data } = res;
      switch (data.type) {
        case "message":
          mergeAction.saveChatMessage(data);
          break;
        default:
          console.warn("cannot find the receiveChatMessage type");
      }
    });
    
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => { 
      randomMatchRemove();
      roomAlertRemove();
      removeListener();     
      socket.removeAllListeners(); 
      window.addEventListener("beforeunload", handleBeforeUnload);
    };
  }, [socket]);

  return {
    match,
    waiting,
    startMatch,
    cancelMatch,
  };
};

export { useMatchOnEvents };
