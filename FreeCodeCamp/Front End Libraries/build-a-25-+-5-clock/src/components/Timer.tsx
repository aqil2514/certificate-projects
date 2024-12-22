import { formatTime } from "../utils";
import { usePomodoro } from "./Provider";

export default function Timer() {
  const { status, timeLeft } = usePomodoro();
  return (
    <div id="timer-label" className="rounded-md border-white px-16 py-4 border-2 my-4">
      <h3 className="text-white text-2xl underline font-serif font-bold text-center">{status}</h3>
      <p id="time-left" className="font-bold text-xl font-sans text-center">{formatTime(timeLeft)}</p>
    </div>
  );
}
