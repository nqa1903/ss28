import React from 'react'

interface Prop{
  name : string;
  students: string[];
}

export default function Functional(props : Prop) {
  //destructoring
  const {name} = props;
  const {students} = props;
  return (
    <div>
      {name}
      {/* Hiển thị danh sách sinh viên*/}
      <ul>
        {students.map((item,index)=>{
          return <li key = {index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
