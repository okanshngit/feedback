import React from 'react';

function Button({ children, type, isDisabled, handleClick }) {
  return (
    <button
      type={type}
      onClick={!isDisabled ? handleClick : null}
      className={`p-2 px-4 rounded-lg  bg-[#006064] ${
        isDisabled ? 'bg-slate-500 text-black' : 'text-white active:scale-95'
      } `}
    >
      {children}
    </button>
  );
}

export default Button;
