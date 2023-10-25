import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
    return (
        <button className='bg-accent hover:bg-accent/80 px-4 py-2 rounded' onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
