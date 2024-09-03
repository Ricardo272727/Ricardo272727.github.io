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
    <nav className="w-full flex justify-around items-center fixed top-0 left-0 bg-black/65">
      <div className="flex justify-start items-center gap-6">
        {items.map((item, key) => (
          <a
            className={`
            ${hash === item.value ? 'border-b-white' : 'border-b-transparent '}
            font-bold text-gray-300 py-6 px-3 border-b-2`} 
            key={key}
            href={item.value}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex">
        <button className="bg-green-500 text-white font-bold text-lg px-6 py-2">Contact me</button>
      </div>
    </nav>
  );
};
