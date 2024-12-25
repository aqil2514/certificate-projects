import { ArrowClockwise, PauseFill, PlayFill } from "react-bootstrap-icons";
import { usePomodoro } from "./Provider";

export default function Operations() {
  const {
    setSessionLength,
    setBreakLength,
    setIsRunning,
    isRunning,
    setStatus,
    audioRef,
  } = usePomodoro();

  const resetHandler = () => {
    setSessionLength(25);
    setBreakLength(5);
    setIsRunning(false);
    setStatus("Session");

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const startStopHandle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="flex justify-center gap-4">
      <button id="reset" className="text-white" onClick={resetHandler}>
        <ArrowClockwise />
      </button>
      <button id="start_stop" className="text-white" onClick={startStopHandle}>
        {isRunning ? <PauseFill /> : <PlayFill />}
      </button>
    </div>
  );
}
