import React, { PureComponent } from 'react'

interface ClassComponent {
    id : number;
    name : string;
    dateOfBirth : string;
    address : string;
}

export default class cau1 extends PureComponent<any , ClassComponent> {
    constructor(props : ClassComponent) {
        super(props)
        this.state = {
            id : 1,
            name : "Nguyễn Minh Sơn",
            dateOfBirth : "20/12/2023",
            address : "Thanh Xuân"
        }
   }
  render() {
    return (
      <div>
        <p>Thông tin cá nhân</p>
        <p>id : {this.state.id}</p>
        <p>Họ và tên : {this.state.name}</p>
        <p>Ngày sinh : {this.state.dateOfBirth}</p>
        <p>Địa chỉ : {this.state.address}</p>
      </div>
    )
  }
}
