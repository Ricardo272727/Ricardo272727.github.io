import { SimpleBox } from "./SimpleBox";
import { Title } from "./Title";

const mockDesc =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ";

export const Project = ({
  name = "",
  description = "",
  background = "",
  image = "",
  details = "",
  onClick = null,
}) => {
  return (
    <SimpleBox
      className={`w-full flex flex-wrap justify-around items-start py-28 
                border-none hover:scale-110 hover:py-36 transition-all duration-500 
                ease-in-out hover:cursor-pointer shadow-lg ${background}`}
      flexDirection={"row"}
      onClick={onClick}
    >
      <div className="w-[60vw] flex flex-col md:flex-row justify-around items-start hover:cursor-pointer gap-5">
        <div className="w-full md:w-1/2">
          <Title className="text-white">{name}</Title>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-xl text-gray-300">{description || mockDesc}</p>
        </div>
      </div>
    </SimpleBox>
  );
};
