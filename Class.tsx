import React, { Component } from 'react'

interface ClassComponent{
    age : number;
    numbers : number[];
}

export default class Class extends Component<ClassComponent> {
  render() {
    //destructoring
    const {age} = this.props;
    return (
      <div>
        <p>{age}</p>
        <p>{this.props.numbers.map((item , index) =>{
            return <li key = {index}> {item}</li>
        })}</p>
      </div>
    )
  }
}
