import React from 'react';
import PropTypes from 'prop-types';
import {SuggestionSection} from './SuggestionSection';
import './SearchSuggestionsList.css';

const SearchSuggestionsList = ({suggestions}) => {

    const suggestionItems =  [...suggestions].map(([key, value]) => 
        <SuggestionSection 
            key={key}
            sectionName={key} 
            items={value} />); 

    return (
        (suggestions &&
        <div className="search-suggestions">
            {suggestionItems}
        </div>)
    );
};


SearchSuggestionsList.propTypes = {
    suggestions: PropTypes.object,
    onMoreClick: PropTypes.func
}

export default SearchSuggestionsList;
