import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.string
  };
  render() {
    return <div onClick={this.props.onClick}>Back</div>;
  }
}
