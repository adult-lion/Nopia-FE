import { useState, useEffect } from "react";
import { NoticeWrap } from "../../styles/ChatStyles";

const Notice = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5000 밀리초(5초) 후에 컴포넌트를 숨김

    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 해제
    };

  }, []);
  return (
    <NoticeWrap>
      {isVisible && (
      <div>
        디지털 격차를 느끼는 1명이 숨어있습니다. 디지털 격차를 극복시켜 주세요.<br />
        주제는 <b>무지출 챌린지에 대해 어떻게 생각하나요?</b>입니다.
      </div>
      )}
    </NoticeWrap>
  );
};

export default Notice;