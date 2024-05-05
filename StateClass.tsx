import React, { Component } from 'react'

interface ClassComponent {
    name : string;
    address : string;
    age : number;
    count : number;
}

export default class StateClass extends Component <any,ClassComponent>{
    constructor(props : ClassComponent){
        super(props)
        this.state = {
            name : "Anh",
            address : "Hanoi",
            age : 25,
            count : 1 
        }
    }
    // nơi khai báo những phương thức
    //khi muốn cập nhập state trong class thì dùng this.setState({})
    handleClick = () =>{
        this.setState({
            count : this.state.count + 1,
        })
    }
  render() {
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
        <p>Giá trị ban đầu {this.state.count}</p>
        <button onClick={this.handleClick}>increase</button>
      </div>
    )
  }
}
