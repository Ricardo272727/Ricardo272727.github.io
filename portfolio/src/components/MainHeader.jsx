export const MainHeader = () => {
  return (
    <header
      className="w-full h-[100vh] md:px-12 px-2 flex md:justify-end justify-center items-center"
      style={{
        backgroundImage: `url(/asteroid.webp)`,
        backgroundRepeat: "non-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/85 text-white px-12 py-10 md:w-[40vw]">
        <h1 className="text-4xl font-bold">Ricardo Cuanalo</h1>
        <h3 className="text-2xl mt-5">Ingeniero de software</h3>
        <p className="text-xl mt-3 mb-9">Desarrollador especializado en soluciones en la nube y sistemas ERP</p>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-2">
          Explora mi trabajo
        </a>
      </div>
    </header>
  );
};
