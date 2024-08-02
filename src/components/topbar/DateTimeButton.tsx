import { useEffect, useState } from "react";
import Button from "../ui/Button";

const DateTimeButton = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const updateTime = 10 * 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, updateTime);

    return () => clearInterval(intervalId);
  }, [updateTime]);

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  return (
    <div className="flex">
      <Button>
        <div className="flex gap-2.5">
          <span>{formatDate(dateTime)}</span>
          <span>{formatTime(dateTime)}</span>
        </div>
      </Button>
    </div>
  );
};

export default DateTimeButton;
