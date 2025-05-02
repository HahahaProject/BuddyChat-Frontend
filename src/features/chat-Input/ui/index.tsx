// package & type
import { useRef, ReactElement } from 'react';
// slice
import { useSendMessageOnEnter } from '../model/use-send-message-on-enter';
import { useSendMessageOnClick } from '../model/use-send-message-on-click';
// layer
import Send from "@/shared/asset/send.svg?react";

/**
 * @FileDesc
 * - 채팅 input UI
 * - 전송 Button UI
 */
const ChatInput = ():ReactElement => {
  const chatRef = useRef<HTMLTextAreaElement>(null);
  const { enterHanlder, typingHandler, renderTyping } = useSendMessageOnEnter(chatRef);
  const { clickHandler } = useSendMessageOnClick(chatRef);

  return (
    <div className="tw:w-full card tw:p-2 tw:flex tw:items-center tw:gap-3 tw:text-base tw:relative">
      {renderTyping && <p className="tw:after:content-['.'] tw:after:animate-dotPing tw:absolute tw:top-0 tw:left-0 tw:-translate-y-full tw:text-service-gray tw:text-sm">
        상대방이 입력중입니다
      </p>}
      <textarea
        className="tw:grow tw:outline-none tw:resize-none tw:peer"
        placeholder="채팅 메세지를 입력해주세요"
        // problem: rows를 1이 아닌 다른값인경우 body태그의 연속적인 깜빡임 발생
        rows={1}
        ref={chatRef}
        required
        onInput={typingHandler}
        onKeyDown={enterHanlder}
      />
      <Send
        className="tw:peer-invalid:fill-service-gray tw:peer-invalid:cursor-not-allowed tw:fill-service-primary tw:size-5 tw:cursor-pointer"
        onClick={clickHandler}
      />
    </div>
  );
};

export default ChatInput;
