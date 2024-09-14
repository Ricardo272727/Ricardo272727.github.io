export const SimpleBox = ({
  id = "",
  className = "",
  children = null,
  flexDirection = "col",
  style = {},
  onClick = null,
  onMouseOut = null,
}) => {
  return (
    <div
      id={id}
      className={`flex justify-around items-center flex-${flexDirection} border-black border-4 px-8 py-5 ${className} `}
      onClick={onClick}
      onMouseLeave={onMouseOut}
      style={style}
    >
      {children}
    </div>
  );
};
