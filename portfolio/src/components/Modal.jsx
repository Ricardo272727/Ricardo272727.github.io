import { Title } from "./Title";

export const Modal = ({
  children = null,
  onClose = null,
  show = false,
  className = "",
}) => {
  return (
    <div
      id="my-modal"
      className={`fixed w-[100vw] h-[100vh] inset-0 bg-gray-800 bg-opacity-75 z-50
        flex items-center justify-center ${!show ? "hidden" : ""}`}
    >
      <div
        className={`bg-black text-white shadow-lg w-[90vw] 
        md:w-[60vw] mx-auto relative p-6 ${className}`}
      >
        {children}

        <button
          className="bg-red-500 text-white font-bold py-2 px-4 absolute top-0 right-0"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
