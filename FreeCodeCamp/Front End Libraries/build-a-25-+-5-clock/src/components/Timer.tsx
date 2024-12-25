import { useEffect } from "react";
import { formatTime } from "../utils";
import { usePomodoro } from "./Provider";

export default function Timer() {
  const {
    status,
    setStatus,
    timeLeft,
    sessionLength,
    setTimeLeft,
    isRunning,
    breakLength,
    audioRef,
  } = usePomodoro();

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength, setTimeLeft]);

  useEffect(() => {
    if (!isRunning) return;

    const runningTimer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      clearInterval(runningTimer);
    };
  }, [isRunning, setTimeLeft]);

  useEffect(() => {
    const audio = audioRef.current;
    if (timeLeft === 0 && audio) {
      switch (status) {
        case "Session":
          audio.play();
          setTimeout(() => {
            setTimeLeft(breakLength * 60);
            setStatus("Break");
          }, 1000);
          break;
        case "Break":
          setTimeout(() => {
            setTimeLeft(sessionLength * 60);
            setStatus("Session");
          }, 1000);
          break;
        default:
          console.warn("Terjadi kesalahan", status);
      }
    }
  }, [
    status,
    setStatus,
    timeLeft,
    breakLength,
    sessionLength,
    setTimeLeft,
    audioRef,
  ]);

  return (
    <div
      id="timer-label"
      className="rounded-md border-white px-16 py-4 border-2 my-4"
    >
      <h3 className="text-white text-2xl underline font-serif font-bold text-center">
        {status}
      </h3>
      <p id="time-left" className="font-bold text-xl font-sans text-center">
        {formatTime(timeLeft)}
      </p>
    </div>
  );
}
