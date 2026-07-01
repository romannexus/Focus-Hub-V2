import { createContext, useContext, useReducer } from "react";

const initialState = {
  isOpened: false,
  focusTime: 61,
  breakTime: 3,
  timeInFocus: 6062,
};
const ModalTimerContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "setIsOpened":
      return { ...state, isOpened: action.payload };
    case "settingsUpdated":
      return {
        ...state,
        focusTime: action.payload.focusTime,
        breakTime: action.payload.breakTime,
      };
    case "timeInFocusUpdated":
      return { ...state, timeInFocus: state.timeInFocus + action.payload };
    default:
      return state;
  }
}

function ModalTimerProvider({ children }) {
  const [{ isOpened, focusTime, breakTime, timeInFocus }, dispatch] =
    useReducer(reducer, initialState);
  function setIsOpened(value) {
    dispatch({ type: "setIsOpened", payload: value });
  }
  function updateTimerTime({ focusMins, breakMins }) {
    const focusTime = focusMins * 60;
    const breakTime = breakMins * 60;
    dispatch({ type: "settingsUpdated", payload: { focusTime, breakTime } });
  }
  function updateTimeInFocus(time) {
    dispatch({ type: "timeInFocusUpdated", payload: time });
  }
  return (
    <ModalTimerContext.Provider
      value={{
        isOpened,
        focusTime,
        breakTime,
        timeInFocus,
        setIsOpened,
        updateTimerTime,
        updateTimeInFocus,
      }}
    >
      {children}
    </ModalTimerContext.Provider>
  );
}

const useModalTimer = () => {
  const context = useContext(ModalTimerContext);
  if (context === undefined) {
    throw new Error("useModalTimer must be used within a ModalTimerProvider");
  }
  return context;
};

export { ModalTimerProvider, useModalTimer };
