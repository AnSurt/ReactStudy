import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button.jsx"
import UserTable from "./UserTable.jsx";
export default class Form extends React.Component {
    state = {
        userId: "",
        userName: "",
        Email: "",
        Phone: "",
        resultFetched: false

    }
    onPress = () =>
        fetch("https://jsonplaceholder.typicode.com/users/" + this.state.userId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        resultFetched: true,
                        userId: result.id,
                        userName: result.name,
                        Email: result.email,
                        Phone: result.phone
                    },
                    ()=>console.log(this.state)
                    );
                }
            )
    handleIdChange = (event) => {
        this.setState({ userId: event.target.value })

    }

    onClose = () => {
        this.setState({ resultFetched: false });
    }
    render() {
        return <div>
            {this.state.resultFetched ? <UserTable userId={this.state.userId} Phone={this.state.Phone} Email={this.state.Email} userName={this.state.userName} onClose={this.onClose} /> :
                <>
                    <form>
                        <label>
                            Your id?
    <input type="text" name="name" placeholder="Id" value={this.state.Id} onChange={this.handleIdChange} />
                        </label>

                    </form>
                    <Button onClick={this.onPress} ></Button>
                </>
            }
        </div>



    }
}