import React from "react"
import ReactDOM from "react-dom"
import "./Styles.css"
import Table from "react-bootstrap/Table"
export default class UserTable extends React.Component{
    
render(){
return<div>
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
      <td >{this.props.Phone}</td>
      
    </tr>
  </tbody>
</Table>
<div onClick={this.props.onClose}>{'<-'}</div>
</>
</div>
}
}