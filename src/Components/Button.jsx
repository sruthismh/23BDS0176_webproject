import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      className="px-6 my-2 py-2 bg-[#FFB8E0] font-bold rounded-lg text-[#BE5985]"
      href={href}
    >
      {text}
    </a>
  );
};

export default Button;
