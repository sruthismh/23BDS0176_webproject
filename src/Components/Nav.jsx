import React, { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" sticky top-0 px-20 lg:px-40 flex justify-between py-3 bg-[#FFB8E0]">
      <a className="font-bold text-xl text-[#C599B6]" href="/">
        OneTap<span className="text-[#BE5985]">Events</span>
      </a>
      <div className="hidden md:flex gap-5">
        <a className="text-[#BE5985] hover:text-[#C599B6]" href="/">
          Home
        </a>
        <a className="text-[#BE5985] hover:text-[#C599B6]" href="#service">
          Service
        </a>
        <a className="text-[#BE5985] hover:text-[#C599B6]" href="#about">
          About
        </a>
        <a className="text-[#BE5985] hover:text-[#C599B6]" href="#gallery">
          Gallery
        </a>
        <a className="text-[#BE5985] hover:text-[#C599B6]" href="#price">
          Price
        </a>
        <a className="text-[#BE5985] hover:text-[#C599B6]" href="#contact">
          Contact
        </a>
      </div>

      {menu ? (
        <div className="md:hidden absolute top-6 right-24 bg-[#FFB8E0] border-2 py-4 px-6 rounded-2xl border-[#BE5985]  flex flex-col gap-2">
          <a className="text-[#BE5985] hover:text-[#C599B6]" href="#home">
            Home
          </a>
          <a className="text-[#BE5985] hover:text-[#C599B6]" href="#service">
            Service
          </a>
          <a className="text-[#BE5985] hover:text-[#C599B6]" href="#about">
            About
          </a>
          <a className="text-[#BE5985] hover:text-[#C599B6]" href="#gallery">
            Gallery
          </a>
          <a className="text-[#BE5985] hover:text-[#C599B6]" href="#price">
            Price
          </a>
          <a className="text-[#BE5985] hover:text-[#C599B6]" href="#contact">
            Contact
          </a>
        </div>
      ) : null}
      <button
        onClick={() => setMenu(!menu)}
        className="md:hidden text-[#BE5985] hover:text-[#C599B6]"
      >
        {menu ? "X" : "☰"}
      </button>
    </div>
  );
};

export default Nav;
