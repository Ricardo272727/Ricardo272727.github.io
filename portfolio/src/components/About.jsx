import { SimpleBox } from "./SimpleBox";
import { Title } from "./Title";

export const About = () => {
  return (
    <section
      className="w-full bg-white flex justify-start items-center flex-col text-center py-20"
      id="about"
    >
      <h1 className="text-4xl font-bold mb-16">
        Mi prioridad es optimizar y generar soluciones prácticas para ti
      </h1>

      <div className="md:w-[60vw] w-[90vw] flex flex-col justify-start md:flex-row md:justify-center gap-8">
        <SimpleBox className="w-full md:w-[33%] h-[50vh] md:h-auto">
          <Title className="text-black">¿Qué puedo hacer?</Title>
          <p>
            Puedo crear sistemas automatizados, páginas web para promocionar tu
            negocio, apps móviles, sistemas IoT, sistemas de recolección de
            datos y reportes automatizados
          </p>
          <p>
            Tengo conocimientos en la nube (AWS), bases de datos, desarrollo
            backend, desarrollo frontend, ETLs, creación de reportes,
            optimización de procesos e integración de sistemas
          </p>
        </SimpleBox>
        <div className="w-full md:w-[33%] flex justify-around items-center flex-col gap-7">
          <SimpleBox className="border-blue-600 bg-blue-600 text-white h-[25vh]">
            <Title>¿Cuál es mi experiencia?</Title>
            <p>
              Tengo 8 años de experiencia profesional como desarrollador de
              software
            </p>
          </SimpleBox>
          <SimpleBox className="border-green-500 bg-green-500 text-white h-[25vh]">
            <Title>¿Que capacitación tengo?</Title>
            <p>
              Soy ingeniero de software y además continuamente estoy aprendiendo
              nuevas tecnologías!
            </p>
          </SimpleBox>
        </div>
        <SimpleBox className="w-full md:w-[33%] h-[50vh] md:h-auto">
          <Title>¿Cómo te puedo ayudar?</Title>
          <p>
            ¿Necesitas optimizar tus procesos y tediosos archivos de excel?,
            ¿Buscas crear un sitio web para tu negocio?, ¿Necesitas crear un
            sistema especializado para reducir costos y aumentar tu
            productividad?
          </p>
          <p>
            Soy un profesional adaptable y siempre busco soluciones innovadoras
            que resuelvan problemas de manera eficiente. Si buscas a alguien que
            pueda abordar cualquier reto tecnológico y llevar tu proyecto a buen
            puerto, ¡estoy listo para trabajar contigo!
          </p>
        </SimpleBox>
      </div>

      <div className="w-[90vw] md:w-[60vw] flex flex-col justify-start md:flex-row md:justify-around gap-8 mt-36">
        <div className="flex flex-col justify-start  md:flex-row md:justify-center w-full md:w-[70%]">
          <div className="w-full md:w-[50%] border-none px-0 py-0 p-0">
            <img
              src="/credentials-system.webp"
              alt="Last project"
              className="w-full"
            />
          </div>
          <SimpleBox className="w-full md:w-[50%] text-white border-blue-500 bg-blue-500">
            <Title>Este es mi último proyecto</Title>
            <p>Sistema de control de asistencias con códigos QR y chips NFC</p>
            <p>
              Reportes en excel, gráficos de asistencia por persona y analisis de
              datos en tiempo real
            </p>
          </SimpleBox>
        </div>
        <SimpleBox className="text-white border-gray-800 bg-gray-800 w-full md:w-[30%]">
          <Title>Notas finales:</Title>
          <p>
            Si tu negocio necesita ser más ágil o buscas empezar a agregar
            tecnología a tus procesos, estoy abierto a escuchar tus ideas y tus
            proyectos, no dudes en enviarme un correo electrónico, puedo
            ayudarte a mejorar muchas cosas en tu negocio y lo mejor de todo...
            a un precio accesible!
          </p>
        </SimpleBox>
      </div>
    </section>
  );
};
