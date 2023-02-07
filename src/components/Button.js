import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text}) => {
  return(
    <button className="bg-white transition duration-150 border-b-4 border-transparent hover:border-blue-400 text-gray-500 font-semibold py-2 px-4">{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button;