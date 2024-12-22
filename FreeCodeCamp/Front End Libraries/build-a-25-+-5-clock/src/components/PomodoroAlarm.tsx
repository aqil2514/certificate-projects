import Label from "./Labels";
import Operations from "./Operations";
import { usePomodoro } from "./Provider";
import Timer from "./Timer";

export default function PomodoroAlarm() {
  const { breakLength, sessionLength, setBreakLength, setSessionLength } =
    usePomodoro();
  return (
    <div className="min-h-screen bg-cyan-600 flex flex-col items-center p-28">
      <h1 className="text-2xl font-serif font-bold">Pomodoro Alarm</h1>
      <div className="flex justify-center gap-4">
        <Label
          text="Break"
          id="break"
          defaultValue={breakLength}
          useAction={setBreakLength}
        />
        <Label
          text="Session"
          id="session"
          defaultValue={sessionLength}
          useAction={setSessionLength}
        />
      </div>
      <Timer />
      <Operations />
    </div>
  );
}
