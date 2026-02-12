import React from "react";

const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins 
        font-medium text-[18px]
         text-primary outline-none 
         ${styles} 
         rounded-[10px] 
         cursor-pointer 
         hover:scale-120
         transition-all
         duration-2000`}
    >
      {text}
    </button>
  );
};

export default Button;
