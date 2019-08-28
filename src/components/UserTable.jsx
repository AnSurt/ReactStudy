import React from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton";
import "./Styles.css";
import Table from "react-bootstrap/Table";
export default class UserTable extends React.Component {
  static propTypes = {
    userId: PropTypes.string,
    Phone: PropTypes.string,
    Email: PropTypes.string,
    userName: PropTypes.string,
    onClose: PropTypes.func
  };

  render() {
    return (
      <div>
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Property</th>
                <th>{this.props.userId}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.props.userName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.props.Email}</td>
              </tr>
              <tr>
                <td>Phone </td>
                <td>{this.props.Phone}</td>
              </tr>
            </tbody>
          </Table>
          <BackButton onClick={this.props.onClose}></BackButton>
        </>
      </div>
    );
  }
}
