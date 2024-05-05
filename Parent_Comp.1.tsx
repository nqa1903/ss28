import React, { Component } from "react";
import Chilren_Comp from "./Chilren_Comp";

interface ParentState{
  name : string;
}

export default class Parent_Comp extends Component<any , ParentState> {
  constructor(props:ParentState) {
    super(props);
    this.state = {
      name: "Nguyễn Văn Nam"
    };
  }
  render() {
    return (
      <div>
        <p>Họ và tên bên component cha : {this.state.name}</p>
        <Chilren_Comp name = {this.state.name} />
      </div>
    );
  }
}
