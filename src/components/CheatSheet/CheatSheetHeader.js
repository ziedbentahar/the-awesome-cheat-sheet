import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from 'components/Buttons';
import './CheatSheetHeader.css';

const CheatSheetHeader = ({hasSidebarButton, renderHeaderContent, onSidebarClick}) => {

    return (
        <div className="cheat-sheet-nav">
           
            <div className="center">
            {renderHeaderContent && renderHeaderContent()}
            </div>
            <div className="button right">
                {hasSidebarButton && <IconButton
                    withBorder={false}
                    icon="fa-angle-double-left"
                    onClick={() => onSidebarClick()}/>}
            </div>
        </div>
    );
};

CheatSheetHeader.propTypes = {
    hasSidebarButton: PropTypes.bool,
    onSidebarClick: PropTypes.func,
    renderHeaderContent: PropTypes.func
};

export default CheatSheetHeader;