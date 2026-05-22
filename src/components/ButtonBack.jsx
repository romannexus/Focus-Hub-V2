import { useNavigate } from "react-router";

function ButtonBack({ children, className }) {
  const navigate = useNavigate();
  return (
    <button
      className={`${className} align-middle cursor-pointer inline`}
      onClick={() => navigate(-1)}
    >
      <svg
        className="w-4 h-4 inline mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
      {children}
    </button>
  );
}

export default ButtonBack;
