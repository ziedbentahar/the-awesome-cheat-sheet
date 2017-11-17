import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({style, icon, withBorder, onClick}) => {

    const inlineStyle = {
        borderWidth: withBorder ? 1 : 0,
        ...style
    };

    return (
        <div onClick={() => onClick()} className="roundButton" style={inlineStyle}>
            <i className={`fa ${icon}`}></i>
        </div>
    );
};

IconButton.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    withBorder: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired
}

export default IconButton;