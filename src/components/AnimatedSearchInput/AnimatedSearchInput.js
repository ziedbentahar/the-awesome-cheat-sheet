import React from 'react';
import PropTypes from 'prop-types';
import './AnimatedSearchInput.css';

const AnimatedSearchInput =  ({onSearchQueryChange, label, placeholder}) => {

    return (
        <div className="animated-search-input">
            <label>
                <input
                    ref={(input) => this.textInput = input}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    type="text"
                    required
                    onKeyUp={this.searchByPrefix}
                    onChange={e => onSearchQueryChange(e.target.value)}/>
                    
                <div className="label-text">
                    <i className="fa fa-search"></i>
                    {label}
                </div>
                {placeholder && <div className="placeholder">{placeholder}</div>}
            </label>
        </div>
    );
}

AnimatedSearchInput.propTypes = {
    onSearchQueryChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default AnimatedSearchInput;

