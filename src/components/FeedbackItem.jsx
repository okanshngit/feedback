import React from 'react';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({ item, handleDelete }) {
  const handleClick = () => {
    handleDelete(item.id);
  };
  return (
    <div className='bg-white m-12 p-2 mt-6 rounded-lg  '>
      <div className='relative flex justify-center items-center  '>
        <div className='absolute top-[-20px] left-[-20px] rounded-full bg-[#006064] text-white text-center w-10 h-10 pt-2'>
          <span>{item.rating}</span>
        </div>
        <button className='mb-1' onClick={handleClick}>
          <FaTimes className='absolute right-5 top-2  ' />
        </button>
      </div>
      <div className='flex justify-center items-center p-4 text-2xl'>
        {item.text}
      </div>
    </div>
  );
}

export default FeedbackItem;
