export const SimpleBox = ({ className = "", children = null }) => {
  return (
    <div className={`border-black border-4 px-8 py-5 ${className} `}>{children}</div>
  );
};
