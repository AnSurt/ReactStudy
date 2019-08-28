import React from "react";
import Button from "./Button.jsx";
import UserTable from "./UserTable.jsx";
import ErrorMassage from "./ErrorMassage.jsx";
export default class Form extends React.Component {
  state = {
    userId: "",
    userName: "",
    Email: "",
    Phone: "",
    errorMessage: null,
    resultFetched: false
  };
  onPress = () =>
    fetch("https://jsonplaceholder.typicode.com/users/" + this.state.userId)
      .then(res => res.json())
      .then(result =>
        Object.keys(result).length > 0
          ? this.setState({
              resultFetched: true,
              userId: result.id,
              userName: result.name,
              Email: result.email,
              Phone: result.phone
            })
          : this.setState({
              errorMessage: "User not found",
              resultFetched: true
            })
      );

  handleIdChange = event => {
    event.persist();
    this.setState(
      { userId: parseInt(event.target.value) || 0 },
      () =>
        parseInt(event.target.value) ||
        alert("You should enter userId to continue")
    );
  };

  onClose = () => {
    this.setState({ resultFetched: false, errorMessage: null });
  };

  render() {
    return (
      <div>
        {!!this.state.errorMessage ? (
          <ErrorMassage
            title={this.state.errorMessage}
            onClose={this.onClose}
          />
        ) : this.state.resultFetched ? (
          <UserTable
            userId={this.state.userId}
            Phone={this.state.Phone}
            Email={this.state.Email}
            userName={this.state.userName}
            onClose={this.onClose}
          />
        ) : (
          <>
            <form>
              <label>
                Your id?
                <input
                  type="text"
                  name="name"
                  placeholder="Id"
                  value={this.state.userId}
                  onChange={this.handleIdChange}
                />
              </label>
            </form>
            <Button onClick={this.onPress}></Button>
          </>
        )}
      </div>
    );
  }
}
