import { useState, useEffect } from "react";
import { NoticeWrap } from "../../styles/ChatStyles";

const Notice = ({ notice }) => {
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
        {notice}
      </div>
      )}
    </NoticeWrap>
  );
};

export default Notice;