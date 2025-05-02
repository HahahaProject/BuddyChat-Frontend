const Group = () => {
  return (
    <div className="tw:h-full">
      {/* 그룹채팅목록 */}
      <div className="tw:h-full tw:flex tw:flex-col tw:gap-4 tw:c-linear-base tw:p-4 tw:c-text-theme-base tw:text-base">
        <div className="tw:flex tw:justify-between">
          <h1 className="tw:text-xl">그룹채팅 목록</h1>
          <span className="tw:text-service-gray">새로고침</span>
        </div>
        <ul className="tw:grow tw:flex tw:flex-col tw:gap-4 tw:overflow-y-scroll">
          <li className="tw:c-text-theme-base tw:flex tw:justify-between tw:items-center tw:border-2 tw:rounded-lg tw:border-service-secondary tw:p-2 tw:c-bg-theme-strong tw:hover:bg-service-secondary tw:hover:text-white">
            <span>그룹채팅방 이름1</span>
            <span>3 / 100</span>
          </li>
        </ul>
        <div className="tw:bg-amber-50">
          <button className="tw:w-full tw:text-sm tw:bg-service-primary tw:text-service-white tw:p-2 tw:rounded-lg">
            그룹채팅방 만들기
          </button>
        </div>
      </div>
      
      {/* 채팅 */}
      {/* <div className="tw:h-full tw:p-4 tw:flex tw:flex-col tw:gap-4">
        <ul className="tw:overflow-y-scroll tw:grow tw:text-service-gray tw:flex tw:flex-col tw:gap-2">
          <li className="tw:p-2 tw:border-1 tw:border-service-secondary tw:rounded-lg tw:text-center">
            <p>닉네임 님이 그룹채팅방 이름1에 입장하였습니다</p>
            <p>2025-01-01 18:00</p>
          </li>
          <li className="tw:p-2 tw:border-1 tw:border-service-secondary tw:rounded-lg tw:text-center">
            <p>- @방: 방정보를 확인할 수 있어요!</p>
          </li>
          <li>
            <span>닉네임1</span>
            <div className="tw:flex tw:justify-start tw:items-center tw:gap-1">
              <span className="tw:bg-service-secondary tw:text-white tw:p-2 tw:rounded-lg">
                안녕하세요
              </span>
              <span>16:01</span>
            </div>
          </li>
          <li>
            <div className="tw:flex tw:justify-end tw:items-center tw:gap-1">
              <span>16:01</span>
              <span className="tw:bg-service-secondary tw:text-white tw:p-2 tw:rounded-lg">
                안녕하세요
              </span>
            </div>
          </li>
          <li>
            <span>닉네임2</span>
            <div className="tw:flex tw:justify-start tw:items-center tw:gap-1">
              <span className="tw:bg-service-secondary tw:text-white tw:p-2 tw:rounded-lg">
                안녕하세요~
              </span>
              <span>16:01</span>
            </div>
          </li>
        </ul>
        
        <div className="tw:mt-5 tw:p-2 tw:border-1 tw:border-service-secondary tw:rounded-lg tw:flex tw:gap-2">
          <input
            className="tw:grow tw:outline-none"
            placeholder="채팅 메세지를 입력해주새요"
          />
          <button className="tw:text-sm tw:bg-service-primary tw:text-service-white tw:p-2 tw:rounded-lg">
            보내기
          </button>
          <button className="tw:text-sm tw:bg-service-red tw:text-service-white tw:p-2 tw:rounded-lg">
            나가기
          </button>
        </div>
      </div> */}

      {/* 모달창 */}
      {/* <div className="tw:flex tw:flex-col tw:justify-center tw:items-center tw:bg-service-gray tw:fixed tw:bottom-1 tw:left-1 tw:right-1 tw:p-2 tw:rounded-lg">
        <span>정말 대화방을 나가시겠어요?</span>
        <div className="tw:flex tw:gap-2">
          <button className="tw:text-sm tw:bg-service-red tw:text-service-white tw:p-2 tw:rounded-lg">
            나가기
          </button>
          <button className="tw:text-sm tw:bg-service-white tw:p-2 tw:rounded-lg tw:text-service-black">
            취소
          </button>
        </div>
      </div> */}

    </div>
  );
};

export default Group;
