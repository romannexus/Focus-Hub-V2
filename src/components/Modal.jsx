function Modal() {
  return (
    <div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"></div>

      <div className="relative bg-white rounded-[20px] shadow-2xl w-full max-w-sm p-6 transform transition-all">
        <h2 className="text-xl font-bold font-condensed text-gray-800 uppercase tracking-wider mb-4 border-b border-gray-100 pb-3">
          Timer Settings
        </h2>
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex items-center justify-between">
            <label className="text-[16px] font-bold text-gray-600">
              Focus (min)
            </label>
            <input
              type="number"
              min="1"
              max="90"
              value="25"
              className="w-20 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-800 font-bold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-[16px] font-bold text-gray-600">
              Short Break (min)
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value="5"
              className="w-20 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-800 font-bold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button className="px-5 py-2.5 rounded-[10px] text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold transition-colors">
            Cancel
          </button>
          <button className="px-5 py-2.5 rounded-[10px] text-white bg-blue-600 hover:bg-blue-800 font-bold transition-colors shadow-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
