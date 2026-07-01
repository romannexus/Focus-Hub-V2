import { useModalTimer } from "../Contexts/ModalTimerContext";
import { useToDo } from "../Contexts/ToDoContext";

function Statistics() {
  const { tasks } = useToDo();
  const { timeInFocus } = useModalTimer();

  const completedTasks = tasks.filter(
    (task) => task.is_completed === true,
  ).length;

  let timeToDisplay = ``;
  if (timeInFocus > 0 && timeInFocus <= 60) {
    timeToDisplay = `${timeInFocus} sec`;
  } else if (timeInFocus > 60 && timeInFocus <= 3600) {
    const mins = Math.floor(timeInFocus / 60);
    timeToDisplay = `${mins} ${mins > 1 ? "mins" : "min"}`;
  } else if (timeInFocus > 3600) {
    const hours = Math.floor(timeInFocus / 3600);
    const mins = Math.floor((timeInFocus % 3600) / 60);
    timeToDisplay = `
    ${hours}
    ${hours > 1 ? "hours" : "hour"}
    ${mins}
    ${mins > 1 ? "mins" : "min"} `;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
      <section className="py-6 px-8 bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
        <h3 className="text-gray-500 text-[14px] font-bold mb-1">
          Completed Tasks
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold font-condensed text-gray-900">
            {completedTasks || "0"}
          </span>
          <span className="text-xl font-bold font-condensed text-gray-400">
            / <span>{tasks.length}</span>
          </span>
        </div>
      </section>
      <section className="py-6 px-8 bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
        <h3 className="text-gray-500 text-[14px] font-bold mb-1">
          Time in Focus
        </h3>
        <div className="text-4xl font-bold font-condensed text-gray-900">
          {timeToDisplay}
        </div>
      </section>
    </div>
  );
}

export default Statistics;
