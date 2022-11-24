import React from "react";
import byteimg from "../images/bytewise-logo.png";
const menus = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Hall of Fame",
    url: "/hall-of-fame",
  },
];
function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 flex items-center justify-between">
      <a href="/">
        <img
          className="object-cover w-36 space-x-36"
          src={byteimg}
          alt="ByteLogo"
        />
      </a>
      <ul className="flex text-white space-x-5 items-center">
        {menus.map((menu) => {
          return (
            <li
              className={
                " px-4 py-2 hover:bg-white/20 cursor-pointer rounded-lg active:bg-white/20 " +
                (window.location.pathname === menu.url ? "active" : "")
              }
            >
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
