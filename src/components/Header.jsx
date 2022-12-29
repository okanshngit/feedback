import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <>
      <div className='flex justify-center items-center text-2xl font-bold p-5 bg-[#006064] text-white'>
        {text}
      </div>
    </>
  );
}
Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
