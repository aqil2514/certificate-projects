import Label from "./Labels";

export default function PomodoroAlarm() {
  return (
    <div className="min-h-screen bg-cyan-600 flex flex-col items-center p-28">
      <h1 className="text-2xl font-serif font-bold">Pomodoro Alarm</h1>
      <div className="flex justify-center gap-4">
      <Label text="Break" id="break" />
      <Label text="Session" id="session" />
      </div>
      
    </div>
  );
}
