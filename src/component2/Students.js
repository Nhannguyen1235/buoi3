import React, { useState } from "react";
import Add from "./Add";
import Student from "./Student";
import './style.css'
import Footer from "./Footer";
import {Container, ListGroup} from 'reactstrap'

export default function Students() {
  const [List, setList] = useState([
    { id: 1, name: "thỏ", checked: true },
    { id: 2, name: "bò", checked: false },
    { id: 3, name: "nai", checked: true },
    { id: 4, name: "thỏ", checked: false },
    { id: 5, name: "chó", checked: true },
  ]);
//Hàm removeByid hoạt động bằng cách tạo một mảng mới từ danh sách sinh viên hiện tại, 
//loại bỏ các sinh viên có id khớp với id được truyền vào, và sau đó cập nhật trạng thái List với mảng mới này
//stud.id !== id: Điều kiện này kiểm tra nếu id của sinh viên khác với id được truyền vào. Nếu điều kiện này đúng, sinh viên đó sẽ được giữ lại trong danh sách mới.
  const removeByid=(id)=>{
    setList(List.filter(stud=>stud.id!==id))
  }
  const reChecked = (id)=>{
    let newList = List.map((stud=>stud.id===id?{...stud,checked:!stud.checked}:stud))
    setList(newList)
  }
  const addStudent=(name)=>{
    setList([...List,{id:List.length+1,name:name,checked:false}])
  }
  return (
    <div>
      <Container className="w-50 text-center p-5 my-5">
        <h1>Student list</h1>
        <Add addStudent = {addStudent}/>
        <ListGroup>
            {
                List.map((stud,index)=>(<Student key={index} student={stud} removeByid={removeByid} reChecked = {reChecked}/>))
            }
        </ListGroup>
        <Footer />
      </Container>
    </div>
  );
}
