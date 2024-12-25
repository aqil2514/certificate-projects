import React, {
  createContext,
  SetStateAction,
  useContext,
  useRef,
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
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
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
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null)
  

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
    audioRef
  };
  return (
    <PomodoroContext.Provider value={value}>
      <audio src="src\assets\beep.mp3" ref={audioRef} id="beep"></audio>
      {children}
    </PomodoroContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePomodoro = () => useContext(PomodoroContext);
