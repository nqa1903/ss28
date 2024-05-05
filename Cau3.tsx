import React, { Component } from 'react'

interface User {
    id : number;
    name : string;
    address : string;
}

export default class Cau3 extends Component <any , {users : User[]}>{
    constructor(props : User){
        super(props);
        this.state = {
            users: [
                {
                    id : 1,
                    name : "anh",
                    address : "Hanoi",
                },
            ],
        }
    }
  render() {
    return (
      <div>
        <ul>
            {this.state.users.map((user) => (
                <li key = {user.id}>
                    <div>id : {user.id}</div>
                    <div>Họ và tên : {user.name}</div>
                    <div>Địa chỉ : {user.address}</div>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}
