import { useState } from "react";
import { Button } from "./Button";
import { Project } from "./Project";
import { SimpleBox } from "./SimpleBox";
import { Title } from "./Title";
import { Modal } from "./Modal";

export const projects = [
  {
    name: "Control de accesos con credenciales",
    description:
      "Sistema de asistencias con lectura de códigos QR y tarjetas NFC. Generación de reportes en excel y carga de datos.",
    image: "/credentials-system.webp",
    background: "bg-gradient-to-r from-blue-700 to-black",
    details: [
      "Facilita la verificación de identidad o entradas mediante el escaneo de códigos QR, agilizando el proceso de acceso tanto en entornos físicos como digitales.",
      "Ofrece la creación de informes detallados en formato Excel, permitiendo un fácil análisis y manejo de datos críticos como registros de acceso y actividad.",
      "Permite subir grandes volúmenes de datos a la plataforma a través de archivos o integraciones automáticas, manteniendo actualizada la información de usuarios y accesos.",
      "Envía alertas inmediatas a los administradores sobre eventos importantes, garantizando una rápida respuesta a situaciones críticas.",
      "El sistema funciona completamente en AWS, asegurando alta disponibilidad, escalabilidad y seguridad, con acceso remoto y respaldos automáticos.",
    ],
  },
  {
    name: "Apps para streaming online",
    description:
      "Apps de Android para transmitir audio en vivo y mantener comunicación en tiempo real",
    image: "/StreamingApps.jpeg",
    background: "bg-gradient-to-r from-orange-800 to-black",
    details: [
      "Estas aplicaciones permiten a los usuarios transmitir contenido multimedia en tiempo real a través de internet, como videos, música o eventos en vivo. La app se optimiza para conexiones de diferentes velocidades, adaptando la calidad del stream según el ancho de banda del usuario. Además, puede incluir funcionalidades adicionales como la grabación de transmisiones, creación de listas de reproducción personalizadas y soporte para varios formatos de audio y video. Todo está gestionado en la nube, garantizando un rendimiento rápido y confiable.",
      "La aplicación incorpora enlaces directos a las principales redes sociales, permitiendo a los usuarios compartir contenido fácilmente en plataformas como Facebook, Instagram, Twitter, o LinkedIn.",
      "La integración de un chat en vivo dentro de las aplicaciones permite a los usuarios interactuar en tiempo real durante eventos o transmisiones. El chat en vivo y ofrece moderación de comentarios.",
    ],
  },
  {
    name: "Streaming de audio online",
    description:
      "La plataforma está diseñada para la actualización y manejo dinámico de contenido en tiempo real.",
    image: "/StreamerManagement.png",
    background: "bg-gradient-to-r from-yellow-800 to-black",
    details: [
      "El sistema está diseñado para ofrecer un control total sobre archivos de audio, permitiendo la gestión de contenido sonoro en tiempo real. Los usuarios pueden cargar, organizar y editar archivos de audio directamente desde la interfaz, con la posibilidad de aplicar filtros, ajustar volúmenes, y realizar mezclas básicas.",
      "El dashboard incluye una sección dedicada a la administración de estaciones de radio en vivo. Aquí, los usuarios pueden agregar, eliminar o modificar estaciones de radio fácilmente. También pueden monitorear el estado de las transmisiones, programar horarios de emisión y realizar cambios en la programación en tiempo real.",
      "La funcionalidad de playlists dentro del dashboard permite a los usuarios crear, organizar y compartir listas de reproducción personalizadas. Las playlists pueden incluir tanto contenido grabado como transmisiones en vivo, y se pueden programar para reproducirse automáticamente en horarios específicos o bajo demanda. El dashboard ofrece herramientas avanzadas para la edición de playlists, como arrastrar y soltar para reordenar canciones, añadir metadatos (artista, género, duración), y establecer criterios automáticos para generar listas basadas en el comportamiento del usuario o en tendencias de popularidad.",
      "La plataforma está diseñada para la actualización y manejo dinámico de contenido en tiempo real. Los administradores pueden cambiar las pistas de audio, modificar las estaciones de radio o actualizar playlists al instante, sin interrupciones para los usuarios finales.",
    ],
  },
  {
    name: "Inventario de laboratorio",
    description:
      "El sistema de inventario de laboratorio permite un control preciso y eficiente de todos los productos y materiales almacenados en el laboratorio.",
    image: "/InventoryManagement.png",
    background: "bg-gradient-to-r from-green-800 to-black",
    details: [
      "El sistema de inventario de laboratorio permite un control preciso y eficiente de todos los productos y materiales almacenados en el laboratorio. Desde sustancias químicas hasta equipos especializados, el sistema centraliza la información de cada artículo, facilitando su localización, historial de uso y estado actual. Además, cuenta con un motor de búsqueda avanzado que permite encontrar productos por nombre, categoría, proveedor o fecha de adquisición, optimizando la gestión del inventario.",
      "El módulo de manejo de productos permite agregar, eliminar y editar productos en el sistema con facilidad. Cada producto puede tener un perfil detallado que incluye su nombre, descripción, número de lote, fecha de caducidad (en caso de aplicarse), proveedor, ubicación en el laboratorio, e instrucciones de uso o almacenamiento. También se pueden asignar etiquetas personalizadas o códigos de barras/QR para facilitar la identificación rápida. Este sistema garantiza que todos los productos estén correctamente catalogados y disponibles cuando se necesiten.",
      "Módulo de existencias; este módulo proporciona una visión en tiempo real del nivel de existencias de cada producto, lo que permite a los administradores verificar qué artículos necesitan ser reabastecidos. Además, se pueden establecer niveles mínimos de stock, generando alertas automáticas cuando un producto alcanza un umbral crítico. El sistema también permite llevar un seguimiento de las entradas y salidas de productos, registrando quién los utilizó, cuándo y en qué cantidad, proporcionando un control exhaustivo sobre el uso de los recursos del laboratorio.",
      "El sistema facilita la generación de reportes detallados en formato Excel para un análisis más profundo del inventario. Los usuarios pueden personalizar los informes según parámetros como el historial de uso, productos agotados, caducidades próximas o el movimiento de existencias en un período determinado. ",
    ],
  },
  {
    name: "Juego personalizado (100 mexicanos dijieron)",
    description:
      "Este juego de preguntas y respuestas permite a los participantes competir en tiempo real, acumulando puntos a medida que responden correctamente.",
    image: "/100Mexicans.png",
    background: "bg-gradient-to-r from-pink-800 to-black",
    details: [
      "Los jugadores ganan puntos por cada respuesta correcta y pueden perder puntos o tiempo en caso de respuestas incorrectas, lo que añade emoción y competencia al juego. El sistema también permite la personalización de las reglas del juego, como el número de rondas, la dificultad de las preguntas y el tiempo límite para responder.",
      "Una característica clave del juego es su integración con botones físicos para que los jugadores puedan responder de manera rápida y eficiente. Cada jugador o equipo tiene un botón asignado, el cual se ilumina o emite una señal cuando es presionado para indicar quién fue el primero en contestar. Estos botones pueden estar conectados mediante Bluetooth o Wi-Fi al sistema central, lo que asegura una respuesta instantánea. El uso de botones físicos añade una capa de interactividad y realismo al juego, haciendo que los participantes se sientan más involucrados en la dinámica.",
      "El juego también es compatible con bocinas inteligentes, ofreciendo una experiencia auditiva inmersiva. A través de las bocinas, se pueden emitir sonidos de cuenta regresiva, efectos especiales al responder correctamente o incorrectamente, y anuncios de la puntuación actual de cada jugador. Además, las bocinas pueden interactuar con los jugadores utilizando comandos de voz, permitiendo que se realicen preguntas y que los participantes respondan sin necesidad de mirar una pantalla. Esto permite una experiencia fluida y accesible para todo tipo de usuarios.",
      "El sistema está diseñado para proyectarse en pantallas, lo que permite mostrar información clave como preguntas, opciones de respuesta, puntuaciones en tiempo real y quién fue el primero en presionar su botón. Las pantallas pueden ser monitores, televisores o incluso proyectores, brindando a los jugadores y espectadores una experiencia visual completa. ",
    ],
  },
  {
    name: "Portal de noticias y radio en linea",
    description:
      "El portal combina noticias actualizadas y estaciones de radio en línea, ofreciendo a los usuarios una experiencia multimedia completa.",
    image: "/StreamingWebsite.png",
    background: "bg-gradient-to-r from-teal-500 to-black",
    details: [
      "Además de poder leer noticias locales, nacionales e internacionales, los usuarios tienen acceso a una amplia variedad de estaciones de radio, que pueden escuchar directamente desde la misma plataforma. El portal está diseñado para ser intuitivo, rápido y accesible desde cualquier dispositivo, optimizado para navegadores web, smartphones y tablets.",
      "Una de las características principales del portal es la capacidad de escuchar diferentes estaciones de radio directamente desde la página. Los usuarios pueden cambiar fácilmente entre estaciones sin necesidad de abrir nuevas pestañas o aplicaciones adicionales. La página organiza las estaciones por categorías (música, noticias, deportes, entretenimiento), y los usuarios pueden crear listas de estaciones favoritas para acceso rápido. ",
      "El portal está diseñado para maximizar su visibilidad y compartir contenido de manera eficiente en redes sociales. Cada artículo de noticias, transmisión de radio o estación puede ser compartido fácilmente en plataformas como Facebook, Twitter, Instagram y WhatsApp mediante botones de 'compartir' integrados. ",
      "El portal está optimizado para dispositivos móviles, asegurando que los usuarios puedan acceder y disfrutar de la experiencia completa sin importar si están en una computadora, smartphone o tablet. ",
    ],
  },
];
//TODO: onclick expands div and displays an image with detailed description

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <div className="w-full bg-white flex justify-start flex-col items-center overflow-hidden" id="projects">
      <div className="w-full md:w-[30%] text-center py-12">
        <Title className="text-4xl my-10">Mis proyectos</Title>
        <p>
          Explora mis proyectos más destacados, da click en cualquier proyecto
          para obtener más información
        </p>
        <Button className="bg-green-500 px-5 py-3 font-bold text-sm my-10">
          EMPIEZA TU PROYECTO
        </Button>
      </div>

      <div className="w-full flex flex-col justify-start items-center bg-black">
        {projects.map((project, index) => (
          <Project
            key={`project-${index}`}
            name={project.name}
            description={project.description}
            image={project.image}
            background={project.background}
            onClick={() => setCurrentProject(project)}
          />
        ))}
      </div>
      {currentProject && (
        <Modal
          show
          onClose={() => setCurrentProject(null)}
          className="flex flex-col justify-start md:flex-row md:justify-around items-start gap-5 h-[80vh] md:h-auto overflow-y-scroll pt-16 md:pt-5"
        >
          <div className="w-full md:w-1/2">
            <Title className="pb-6">{currentProject.name}</Title>
            <img
              src={currentProject.image}
              className="w-full h-auto"
              alt={currentProject.name}
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-300 pt-6">
            {currentProject.details.map((detail, key) => (
              <div key={key}>
                <p>{detail}</p>
                <br />
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};
