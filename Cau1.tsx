import React, { PureComponent } from 'react'

interface ClassComponent {
    name : string;
}

export default class cau1 extends PureComponent<any , ClassComponent> {
    constructor(props : ClassComponent) {
        super(props)
        this.state = {
            name : "Nguyễn Minh Sơn"
        }
   }
  render() {
    return (
      <div>
        <p>Họ và tên : {this.state.name}</p>
      </div>
    )
  }
}
