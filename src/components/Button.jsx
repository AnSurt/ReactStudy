import React from 'react';


export default class Button extends React.Component{
   
    render(){
        return<div onClick = {this.props.onClick} >submit</div>
    }
}