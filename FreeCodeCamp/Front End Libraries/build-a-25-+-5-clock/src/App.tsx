import PomodoroAlarm from "./components/PomodoroAlarm";
import PomodoroProvider from "./components/Provider";

function App() {
  return (
    <PomodoroProvider>
      <PomodoroAlarm />;
    </PomodoroProvider>
  );
}

export default App;
