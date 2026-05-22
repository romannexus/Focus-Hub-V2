{
  /* timer-btn-inactive  timer-btn-active*/
}
const invactiveStyle = "bg-gray-100 text-gray-700 hover:bg-gray-200";
const activeStyle = "bg-blue-600 text-white shadow-sm hover:bg-blue-800";

function TimerButton({ children, isActive = false }) {
  return (
    <button
      className={`${isActive ? activeStyle : invactiveStyle} border-none font-bold cursor-pointer px-10 py-3.5 rounded-[10px] text-[16px] transition-colors`}
    >
      {children}
    </button>
  );
}

export default TimerButton;
