import { useState, useEffect } from "react";

/**
 * 실시간 시계 기능을 담당하는 커스텀 훅입니다.
 * 컴포넌트 로직을 UI와 분리하여 재사용성과 가독성을 높입니다.
 */
export const useClock = () => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });

  const updateDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    
    setCurrentDateTime({
      date: `${year}/${month}/${day}`,
      time: `${hours}:${minutes}:${seconds}`,
    });
  };

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentDateTime;
};
