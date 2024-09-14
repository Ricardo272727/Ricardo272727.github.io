export const SimpleBox = ({
  className = "",
  children = null,
  flexDirection = "col",
  style = {},
}) => {
  return (
    <div
      className={`flex justify-around items-center flex-${flexDirection} border-black border-4 px-8 py-5 ${className} `}
      style={style}
    >
      {children}
    </div>
  );
};
