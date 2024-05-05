import React, { useState } from 'react'

export default function StateFunction() {
    //khi dùng useState phải khai báo kiểu dữ liệu
    const [number , setNumber] = useState<number>(0);
    const [fullName , setFullName] = useState<string>("Anh");
    // hàm useState trả về 1 mảng có 2 giá trị 
    // 1 là giá trị 0 , 2 là 1 cái hàm xử lý
    //khi muốn cập nhật state thì dùng set lại
    const handleClick = () =>{
        setNumber(number + 1);
    }
  return (
    <div>
      <p>Giá trị number ban đầu {number}</p>
      <button onClick={handleClick} >tăng</button>
      <p>Hi {fullName}</p>
    </div>
  )
}
