import React, { Component } from 'react'

interface Con {
    id : number;
    name : string;
    price : number;
    quantity : number;
}

export default class Con_Comp extends Component <{product : Con}>{
  render() {
    const {id , name , price , quantity} = this.props.product;
    return (
      <div>
        <p>ID : {id}</p>
        <p>Name : {name}</p>
        <p>Price : {price}</p>
        <p>Quantity : {quantity}</p>
      </div>
    )
  }
}
