import React, { Component } from 'react'
import Con_Comp from './Con_Comp';

interface Cha{
    id : number;
    name : string;
    price : number;
    quantity : number;
}

export default class Cha_Comp extends Component <any , Cha>{
    constructor(props : Cha) {
        super(props)
        this.state = {
            id : 1 ,
            name : "iphone",
            price : 50,
            quantity : 3,
        }
    }
  render() {
    return (
      <div>
        <Con_Comp product = {this.state}></Con_Comp>
      </div>
    )
  }
}
