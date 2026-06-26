import { AnimatePresence, motion } from "motion/react";

function PlayVolume({ isPlaying, setIsPlaying, volume, setVolume }) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="relative flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-[10px] transition-colors cursor-pointer border border-blue-100 overflow-hidden"
      >
        <AnimatePresence>
          {!isPlaying ? (
            <motion.svg
              key="play"
              className={`icon-play absolute w-5 h-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </motion.svg>
          ) : (
            <motion.svg
              key="pause"
              className={`icon-play absolute w-5 h-5 `}
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        className="w-24 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 outline-none"
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
}
export default PlayVolume;
