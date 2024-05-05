import React, { Component } from 'react'

interface Chilren{
    name : string;
}

export default class Chilren_Comp extends Component<any , Chilren> {
  render() {
    return (
      <div>
        <p>Họ và tên bên component con : {this.props.name}</p>
      </div>
    )
  }
}
