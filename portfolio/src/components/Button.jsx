export const Button = ({ children = null, className = "", onClick = null }) => (
  <button
    className={`bg-blue-600 text-white px-6 py-2 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
