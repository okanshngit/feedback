import React, { useState } from 'react';

function RatingSelect({ setRating }) {
  const [selected, setSelected] = useState(3);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    setRating(+e.currentTarget.value);
  };
  return (
    <ul className='flex space-x-4 justify-center mx-auto mb-5 cursor-pointer focus:outline-2  '>
      {Array.from({ length: 10 }, (_, i) => (
        <button
          className='flex rounded-full bg-[#006064] text-white text-center justify-center w-14 h-14 p-3  text-xl   active:scale-95   '
          key={`rating-${i + 1}`}
        >
          <input
            className='appearance-none  '
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label className='cursor-pointer ' htmlFor={`num${i + 1}`}>
            {i + 1}
          </label>
        </button>
      ))}
    </ul>
  );
}

export default RatingSelect;
