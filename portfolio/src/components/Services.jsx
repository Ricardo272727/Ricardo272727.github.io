import { Title } from "./Title";

export const services = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "Desarrollo de páginas web, portales de analisis de datos, gráficasen tiempo real, bases de datos y manejo de procesos internos",
    image: "/web-development.webp",
  },
  {
    title: "Desarrollo de APIs y Microservicios",
    description:
      "Diseño e implementación de APIs RESTful y microservicios para aplicaciones escalables y distribuidas.",
    image: "/apis.webp",
  },
  {
    title: "Desarrollo en la Nube",
    description:
      "Diseño, implementación y administración de soluciones en la nube con AWS",
    image: "/aws.webp",
  },
  {
    title: "Bases de Datos",
    description:
      "Diseño y gestión de bases de datos relacionales (como PostgreSQL, MySQL) y no relacionales (MongoDB, Snowflake)",
    image: "/databases.webp",
  },
  {
    title: "Applicaciones móviles",
    description: "Desarrollo de apps móviles para Android utilizando Flutter",
    image: "/android.webp",
  },
  {
    title: "Optimización de Procesos",
    description:
      "Automatización de tareas y optimización de procesos operativos, con aplicaciones personalizadas",
    image: "/processes.webp",
  },
  {
    title: "Integración de sistemas y APIs de terceros",
    description:
      "Conexión de plataformas con servicios externos para mejorar la interoperabilidad.",
    image: "/system-integration.webp",
  },
  {
    title: "Seguridad de Aplicaciones",
    description:
      "Implementación de protocolos de seguridad para proteger datos y usuarios, incluyendo autenticación, encriptación y control de acceso.",
    image: "/security.webp",
  },
  {
    title: "Mantenimiento y Soporte Técnico",
    description:
      "Monitoreo y mantenimiento de sistemas y aplicaciones, garantizando su estabilidad y optimización constante.",
    image: "/support.webp",
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Asesoramiento en la elección de tecnologías, plataformas y soluciones adecuadas para los proyectos de software de las empresas.",
    image: "/consultancy.webp",
  },
  {
    title: "Desarrollo de ERP y sistemas personalizados",
    description:
      "Creación de software de gestión y planificación empresarial para optimizar operaciones",
    image: "/custom-systems.webp",
  },
];

export const Services = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-36 text-center text-white">
      <Title className="text-3xl">Te puedo ayudar en:</Title>
      <div className="flex flex-wrap w-[90vw] md:w-[60vw] mx-auto my-20">
        {services.map((service, key) => (
          <div
            className="flex w-full md:w-[33%] justify-start items-center flex-col py-6 px-5"
            key={`service-${key}`}
          >
            <img
              src={service.image}
              alt="Web development"
              className="w-[8rem] h-[8rem] rounded"
            />
            <h3 className="uppercase font-bold my-6">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
