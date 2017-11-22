import React from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";
import { SuggestionSection } from "./SuggestionSection";
import "./SearchSuggestionsGrid.css";

const SearchSuggestionsGrid = ({ suggestions }) => {
  const suggestionItems = [...suggestions].map(([key, value]) => (
    <SuggestionSection key={key} sectionName={key} items={value} />
  ));

  return (
    <Masonry
      key={new Date()}
      className={"search-suggestions-grid"}
      elementType={"div"}
      options={{}}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
    >
      {suggestionItems}
    </Masonry>
  );
};

SearchSuggestionsGrid.propTypes = {
  suggestions: PropTypes.object,
  onMoreClick: PropTypes.func
};

export default SearchSuggestionsGrid;
