import React from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton";
export default class ErrorMassage extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func
  };
  render() {
    return (
      <div>
        <div> {this.props.title}</div>

        <BackButton onClick={this.props.onClose}></BackButton>
      </div>
    );
  }
}
