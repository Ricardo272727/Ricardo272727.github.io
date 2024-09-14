import { useCallback, useEffect, useState } from "react";

export const Navbar = ({ items = [] }) => {        
    const [hash, setHash] = useState('')

    const hashChangeHandler = useCallback(() => {
        setHash(window.location.hash);
    }, []);

    useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler)
        return () => {
            window.removeEventListener('hashchange', hashChangeHandler)
        }
    }, [])

  return (
    <nav className="w-[100vw] flex justify-around items-center fixed top-0 left-0 bg-black/65 z-50">
      <div className="flex justify-start items-center gap-2 md:gap-6">
        {items.map((item, key) => (
          <a
            className={`
            ${hash === item.value ? 'border-b-white' : 'border-b-transparent '}
            font-bold text-gray-300 py-5 px-2 md:py-6 md:px-3 border-b-2`} 
            key={key}
            href={item.value}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex">
        <a href="#contact" className="bg-green-500 text-white font-bold text-md px-2 py-1 md:px-6 md:py-2">Contacto</a>
      </div>
    </nav>
  );
};
