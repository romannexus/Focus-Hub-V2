import Logo from "../components/Logo";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-b border-gray-100 sticky top-0 z-10">
      <Logo width="100px" />

      <div className="hidden md:block text-gray-500 italic text-[14px] px-4"></div>

      <div className="text-[14px]">
        <a
          className="text-blue-600 hover:text-blue-800 font-bold underline cursor-pointer transition-colors"
          href="#"
        >
          Sign out
        </a>
      </div>
    </header>
  );
}

export default Header;
