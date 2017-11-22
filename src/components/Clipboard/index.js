import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const CLICK_TO_COPY_TO_CLIPBOARD = "with-clipboard";

const clipboard = new Clipboard(`.${CLICK_TO_COPY_TO_CLIPBOARD}`);
clipboard.on("success", e => console.log(e.text));

export default class WithClipboard extends React.Component {
  render() {
    return (
      <Tooltip
        title="Copied!"
        trigger="click"
        hideDelay="1000"
        inertia="true"
        size="small"
        arrow="true"
        distance="0"
        ref={tooltip => (this.tooltip = tooltip)}
      >
        <div
          className={CLICK_TO_COPY_TO_CLIPBOARD}
          data-clipboard-text={this.props.clipboardText}
          onMouseMove={() => this.tooltip.hideTooltip()}
        >
          {this.props.renderComponent()}
        </div>
      </Tooltip>
    );
  }
}

WithClipboard.propTypes = {
  renderComponent: PropTypes.func.isRequired,
  clipboardText: PropTypes.string.isRequired
};
