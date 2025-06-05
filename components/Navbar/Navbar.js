"use client";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const menu = [
    { title: "Accueil", link: "/", id: 1 },
    { title: "Hébergement", link: "/housing", id: 2 },
    { title: "Soins Bien-Être", link: "/wellness", id: 3 },
    { title: "Réservations", link: "/booking", id: 4 },
    { title: "Evènements", link: "/events", id: 5 },
  ];
  return (
    <nav className="shadow-md px-4 py-6 items-center">
      <button className="md:hidden flex items-center" onClick={toggleMenu}>
        {isOpen ? (<span className="text-2xl text-right" >X</span>
          
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        )}
      </button>
      <ul className=" hidden md:flex d max-w-7xl mx-auto justify-between items-center">
        {menu.map((item) => (
          <Link key={item.id} href={item.link} className="mx-2 hover:underline">
            {item.title}
          </Link>
        ))}
      </ul>
      {isOpen && (
        <ul className="flex flex-col md:hidden pt-16 text-right">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="mx-2 hover:underline p-2"
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
