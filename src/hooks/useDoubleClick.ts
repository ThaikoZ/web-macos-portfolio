import { useCallback, useState } from "react";

const useDoubleClick = (
  onDoubleClick: () => void,
  doubleClickDelay: number = 200
) => {
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleDoubleClick = useCallback(() => {
    const currentTime = Date.now();
    const timeDifference = currentTime - lastClickTime;

    if (timeDifference < doubleClickDelay) {
      onDoubleClick();
    }

    setLastClickTime(currentTime);
  }, [lastClickTime, onDoubleClick, doubleClickDelay]);
  return handleDoubleClick;
};

export default useDoubleClick;
