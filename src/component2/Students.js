import React, { useState, useEffect } from "react";
import Add from "./Add";
import Student from "./Student";
import "./style.css";
import Footer from "./Footer";
import { Container, ListGroup } from "reactstrap";

export default function Students() {
    const [flag,setFlag] =  useState('')
    const [checkAll,setcheckAll] = useState(false)
    const [List, setList] = useState(() => {
        const storedList = localStorage.getItem('list');
        return storedList ? JSON.parse(storedList) : [
          { id: 1, name: "thỏ", checked: true },
          { id: 2, name: "bò", checked: false },
          { id: 3, name: "nai", checked: true },
          { id: 4, name: "thỏ", checked: false },
          { id: 5, name: "chó", checked: true },
        ];
      });
      // useEffect là để thực hiện các tác vụ phụ ở đây nếu biến list thay đổi thì localStorage.setItem('list', JSON.stringify(List)); sẽ được chạy
       useEffect(() => {
        localStorage.setItem('list', JSON.stringify(List));
      }, [List]);
  //Hàm removeByid hoạt động bằng cách tạo một mảng mới từ danh sách sinh viên hiện tại,
  //loại bỏ các sinh viên có id khớp với id được truyền vào, và sau đó cập nhật trạng thái List với mảng mới này
  //stud.id !== id: Điều kiện này kiểm tra nếu id của sinh viên khác với id được truyền vào. Nếu điều kiện này đúng, sinh viên đó sẽ được giữ lại trong danh sách mới.
  const removeByid = (id) => {
    setList(List.filter((stud) => stud.id !== id));
  };
  const reChecked = (id) => {
    let newList = List.map((stud) =>
      stud.id === id ? { ...stud, checked: !stud.checked } : stud
    );
    setList(newList);
  };
  const addStudent = (name) => {
    setList([...List, { id: List.length ==0?1:List.reduce((value,item)=>Math.max(item.id,value)+1,0), name: name, checked: false }]);
  };

  const editStudent = (id, newName) => {
    setList(List.map(stud => stud.id === id ? { ...stud, name: newName } : stud));
  };
  const filterStuden = (List,flag)=>{
    if(flag =="check"){
        return List.filter(stud=>stud.checked)
    }
    else if(flag =='nocheck'){
        return List.filter(student=>!student.checked==false)
        
    }
    else if(flag=="deleteall"){
        setList(List.filter(stud => !stud.checked))
        setFlag('')
    }
    else if(flag=='clear'){
        return List.map(stud=>({...stud,checked: false}))
    }
    else if(flag=='checkAll'){
        setList( List.map(student=>({...student,checked:!checkAll})))
        setcheckAll(!checkAll)
        setFlag('')
    }
    return List
  }
  return (
    <div>
      <Container className="w-50 text-center p-5 my-5">
        <h1>Student list</h1>
        <Add addStudent={addStudent} />
        <ListGroup>
          {filterStuden(List,flag).map((stud, index) => (
            <Student
              key={index}
              student={stud}
              removeByid={removeByid}
              reChecked={reChecked}
              editStudent={editStudent}

            />
          ))}
        </ListGroup>
        <Footer setFlag={setFlag} checkAll = {checkAll} />
      </Container>
    </div>
  );
}
