import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheatSheet from 'components/CheatSheet';
import SearchServiceFactory from 'services/Search/SearchServiceFactory';
import cheatSheetConfig from 'config/cheatSheetConfig';

const searchService = SearchServiceFactory
    .createNew({
        documentsFileName: cheatSheetConfig.data.documents, 
        indexFileName: cheatSheetConfig.data.index});

export default class CheatSheetView extends Component {

    static propTypes = {
        searchInputLabel: PropTypes.string.isRequired
    }

    render() {
        return <CheatSheet
            {...this.props}
            inputLabel={this.props.searchInputLabel}
            searchByPrefixFn={searchService.searchByPrefixAsync}
            getAllFn={searchService.getAllDocumentsAsync}/>;
    }
}