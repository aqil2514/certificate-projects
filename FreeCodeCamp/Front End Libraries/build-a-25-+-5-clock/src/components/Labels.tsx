import { ArrowDown, ArrowUp } from "react-bootstrap-icons";

interface LabelProps {
  id: "session" | "break";
  text: "Session" | "Break";
}

export default function Label({ id, text }: LabelProps) {
  return (
    <div>
      <h3 id={`${id}-label`} className="text-white font-bold underline">{text} Label</h3>
      <div className="flex justify-center gap-4">
      <button id={`${id}-decrement`}><ArrowDown /></button>
      <div id={`${id}-length`}>25</div>
      <button id={`${id}-increment`}><ArrowUp /></button>
      </div>
    </div>
  );
}
