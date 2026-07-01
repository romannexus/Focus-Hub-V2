import { useEffect, useState } from "react";
import TimerButton from "./TimerButton";
import { useModalTimer } from "../Contexts/ModalTimerContext";

function Timer() {
  const { setIsOpened, focusTime, breakTime, updateTimeInFocus } =
    useModalTimer();

  const [isFocused, setIsFocused] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    isFocused ? focusTime : breakTime,
  );

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  if (secondsLeft <= 0 && isRunning) {
    setIsRunning(false);
    setIsFocused((prev) => !prev);
    updateTimeInFocus(focusTime);
  }

  useEffect(
    function () {
      if (isRunning === false) return;

      const id = setInterval(() => {
        setSecondsLeft((prev) => Math.max(0, prev - 1));
      }, 1000);

      return () => clearInterval(id);
    },
    [isRunning],
  );

  useEffect(() => {
    setSecondsLeft(isFocused ? focusTime : breakTime);
  }, [isFocused, focusTime, breakTime]);

  return (
    <section className="flex flex-col items-center justify-center py-12 px-5 bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-gray-100 relative transition-colors duration-500 ease-in-out">
      <h1 className="text-xl mt-0 mb-6 font-bold font-condensed text-gray-600 uppercase tracking-wider">
        Focus Session
      </h1>

      <button
        className="absolute top-5 right-5 text-gray-400 bg-transparent border-none p-2 rounded-lg hover:bg-gray-50 hover:text-gray-600 cursor-pointer transition-colors duration-200"
        aria-label="Timer Settings"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </button>

      <div className="text-8xl md:text-9xl font-bold font-condensed text-gray-900 mb-10 tracking-tight select-none">
        {`${mins}:${seconds}`}
      </div>

      <div className="flex items-center gap-3">
        <TimerButton isActive={!isRunning} onClick={setIsRunning}>
          Start
        </TimerButton>
        <TimerButton isActive={isRunning} onClick={setIsRunning}>
          Pause
        </TimerButton>
        <button
          className="text-gray-500 bg-white border border-gray-300 font-bold hover:bg-gray-50 hover:text-gray-800 cursor-pointer p-3.5 rounded-[10px] transition-colors flex items-center justify-center"
          title="Reset"
          onClick={() => {
            setSecondsLeft(isFocused ? focusTime : breakTime);
            setIsRunning(false);
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Timer;
