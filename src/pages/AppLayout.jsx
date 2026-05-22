import { useEffect } from "react";
import Atmosphere from "../components/Atmosphere";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Statistics from "../components/Statistics";
import Timer from "../components/Timer";
import ToDoList from "../components/ToDoList";

function AppLayout() {
  return (
    <div className="m-0 bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col selection:bg-blue-200 bg-[linear-gradient(#f59f67,#353f76)] antialiased">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto py-10 px-5 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          <Timer />
          <Atmosphere />
          <Statistics />
        </div>
        <div className="lg:col-span-5 flex flex-col">
          <ToDoList />
        </div>
      </main>
      <Modal />
      {/* <div
        className="fixed bottom-5 right-5 z-50 transform translate-y-24 opacity-0 transition-all duration-300 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-[10px] shadow-lg flex items-center gap-3 pointer-events-none"
      >
        <span className="text-xl">🚨</span>
        <p className="font-bold text-[14px] m-0">
          Something went wrong!
        </p>
      </div> */}
    </div>
  );
}

export default AppLayout;
