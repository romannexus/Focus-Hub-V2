function Atmosphere() {
  return (
    <section className="py-8 px-6 md:px-8 bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold font-condensed text-gray-600 uppercase tracking-wider">
          Atmosphere
        </h2>

        <div className="flex items-center gap-4">
          <button className="play-toggle-btn relative flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-[10px] transition-colors cursor-pointer border border-blue-100 overflow-hidden">
            <svg
              className="icon-play absolute w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </svg>

            <svg
              className="icon-pause absolute w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="w-24 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button
          data-sound="rain"
          className="js-sound-btn sound-btn-inactive flex flex-col items-center justify-center p-4 rounded-[10px] transition-all cursor-pointer group"
        >
          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            🌧️
          </span>
          <span className="text-[14px] font-bold group-hover:text-blue-600">
            Rain
          </span>
        </button>

        <button
          data-sound="calm"
          className="js-sound-btn sound-btn-active flex flex-col items-center justify-center p-4 rounded-[10px] transition-all cursor-pointer group"
        >
          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            💤
          </span>
          <span className="text-[14px] font-bold">Calm</span>
        </button>

        <button
          data-sound="forest"
          className="js-sound-btn sound-btn-inactive flex flex-col items-center justify-center p-4 rounded-[10px] transition-all cursor-pointer group"
        >
          <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            🌲
          </span>
          <span className="text-[14px] font-bold group-hover:text-blue-600">
            Forest
          </span>
        </button>
      </div>
    </section>
  );
}

export default Atmosphere;
