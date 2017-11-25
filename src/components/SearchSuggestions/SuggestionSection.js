import React from "react";
import PropTypes from "prop-types";
import WithClipboard from "components/Clipboard";


const SuggestionSectionList = ({ items, onMoreClick }) => {
  const listItems = items.map(item => (
    <li key={item.id}>
      <p className="description">{item.description}</p>
      <WithClipboard
        clipboardText={item.command}
        renderComponent={() => item.command && <pre className="details">$ {item.command}</pre>}
      />
    </li>
  ));

  return <ul>{listItems}</ul>;
};

SuggestionSectionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMoreClick: PropTypes.func
};

const SuggestionSection = ({ sectionName, items }) => (
  <section>
    <div>
      <h3>{sectionName}</h3>
      <SuggestionSectionList items={items} />
    </div>
  </section>
);

SuggestionSection.propTypes = {
  sectionName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMoreClick: PropTypes.func
};

export { SuggestionSectionList, SuggestionSection };
