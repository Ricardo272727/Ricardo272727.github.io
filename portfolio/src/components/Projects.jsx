import { Button } from "./Button";
import { SimpleBox } from "./SimpleBox";
import { Title } from "./Title";

const mockDesc =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ";

export const projects = [
  {
    name: "Control de accesos con credenciales",
    description: "",
    image: "/credentials-system.webp",
    background: "bg-gradient-to-r from-blue-700 to-black",
  },
  {
    name: "Apps para streaming online",
    description: "",
    image: "/apps-streaming.webp",
    background: "bg-gradient-to-r from-orange-800 to-black",
  },
  {
    name: "Control de paqueteria y envios",
    description: "",
    image: "",
    background: "bg-gradient-to-r from-yellow-800 to-black",
  },
  {
    name: "Inventario de laboratorio",
    description: "",
    image: "",
    background: "bg-gradient-to-r from-green-800 to-black",
  },
  {
    name: "Juego personalizado (100 mexicanos dijieron)",
    description: "",
    image: "",
    background: "bg-gradient-to-r from-pink-800 to-black",
  },
  {
    name: "Juego personalizado (el rival mas debil)",
    description: "",
    image: "",
    background: "bg-gradient-to-r from-purple-800 to-black",
  },
  {
    name: "Portal de noticias",
    description: "",
    image: "",
    background: "bg-gradient-to-r from-teal-500 to-black",
  },
];
//TODO: onclick expands div and displays an image with detailed description

export const Projects = () => {
  return (
    <div className="w-full bg-white flex justify-start flex-col items-center overflow-hidden">
      <div className="w-full md:w-[30%] text-center py-12">
        <Title className="text-4xl my-10">Our best projects</Title>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics.
        </p>
        <Button className="bg-green-500 px-5 py-3 font-bold text-sm my-10">
          START YOUR PROJECT
        </Button>
      </div>
      
      <div className="w-full flex flex-col justify-start items-center bg-black">
        {projects.map((project, index) => (
          <SimpleBox
            className={`w-full flex justify-around items-start py-16 
                border-none hover:scale-125 hover:py-36 transition-all duration-500 
                ease-in-out hover:cursor-pointer shadow-lg ${project.background}`}
            flexDirection="row"
            key={`project-${index}`}            
          >
            <div className="w-[60vw] flex justify-around items-start ">
              <div className="w-1/2">
                <Title className="text-white">{project.name}</Title>
              </div>
              <div
                className="w-1/2"
              >
                <p className="text-xl text-gray-300">
                  {project.description || mockDesc}
                </p>
              </div>
            </div>
          </SimpleBox>
        ))}
      </div>
    </div>
  );
};
