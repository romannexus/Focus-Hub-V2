function Input({ className = "", ...props }) {
  const baseClasses =
    "rounded-[15px] mb-3 mt-1 p-2.5 text-sm border border-gray-300 outline-none transition-colors duration-300 ease-in-out focus:border-primary-blue focus:bg-bg-gray";
  return <input className={`${baseClasses} ${className}`} {...props} />;
}

export default Input;
