function SoundButton({ sound, emoji, label, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(sound)}
      className={`flex flex-col items-center justify-center p-4 rounded-[10px] transition-all cursor-pointer group ${
        isActive
          ? "bg-blue-50 border-2 border-blue-500"
          : "bg-gray-50 border-2 border-transparent hover:border-blue-300"
      }`}
    >
      <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </span>
      <span
        className={`text-[14px] font-bold ${
          isActive ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export default SoundButton;