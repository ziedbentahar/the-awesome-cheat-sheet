import React, { Component } from "react";
import PropTypes from "prop-types";
import CheatSheetHeader from "./CheatSheetHeader";
import AnimatedSearchInput from "components/AnimatedSearchInput";
import { SearchSuggestionsGrid } from "components/SearchSuggestions";

export default class CheatSheet extends Component {
  static propTypes = {
    searchByPrefixFn: PropTypes.func.isRequired,
    getAllFn: PropTypes.func.isRequired,
    sidebarClickHandler: PropTypes.func.isRequired,
    searchInputLabel: PropTypes.string.isRequired,
    inputDescription: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      suggestions: new Map()
    };
  }

  async searchByPrefix(query) {
    const suggestions =
      query.length > 1
        ? await this.props.searchByPrefixFn(query)
        : await this.props.getAllFn();

    this.setState({ suggestions: suggestions });
  }

  async componentDidMount() {
    this.setState({
      suggestions: await this.props.getAllFn()
    });
  }

  render() {
    const { suggestions } = this.state;

    return (
      <div>
        <CheatSheetHeader
          hasSidebarButton
          onSidebarClick={() => this.props.sidebarClickHandler(true)}
          renderHeaderContent={() => (
            <AnimatedSearchInput
              onSearchQueryChange={query => this.searchByPrefix(query)}
              placeholder={this.props.inputDescription}
              label={this.props.searchInputLabel}
            />
          )}
        />

        {suggestions && (
          <div style={{ marginTop: 20 }}>
            <SearchSuggestionsGrid suggestions={suggestions} />
          </div>
        )}
      </div>
    );
  }
}
