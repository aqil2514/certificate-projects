import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface PomodoroProviderContext {
  breakLength: number;
  setBreakLength: React.Dispatch<SetStateAction<number>>;
  sessionLength: number;
  setSessionLength: React.Dispatch<SetStateAction<number>>;
  status: "Session" | "Break";
  setStatus: React.Dispatch<SetStateAction<"Session" | "Break">>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<SetStateAction<boolean>>;
}

const PomodoroContext = createContext<PomodoroProviderContext>(
  {} as PomodoroProviderContext
);

export default function PomodoroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [status, setStatus] =
    useState<PomodoroProviderContext["status"]>("Session");
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); // Waktu dalam detik
  const [isRunning, setIsRunning] = useState(false); // Timer berjalan atau tidak

  const value: PomodoroProviderContext = {
    breakLength,
    sessionLength,
    setBreakLength,
    setSessionLength,
    status,
    setStatus,
    isRunning,
    setIsRunning,
    setTimeLeft,
    timeLeft,
  };
  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePomodoro = () => useContext(PomodoroContext);
