"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavLinks = [
  {
    id: 1,
    title: "Experiences",
    path: "#experiences",
  },
  {
    id: 2,
    title: "Projects",
    path: "#projects",
  },
  {
    id: 3,
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90">
      <div className="flex container flex-wrap sm:max-w-xl md:max-w-full lg:max-w-screen-lg items-center justify-between mx-auto p-6 md:px-12">
        <Link
          href="#home"
          className="text-2xl md:text-4xl text-white font-medium">
          by MA👩‍💻
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md: flex-row md:space-x-8 mt-0">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
