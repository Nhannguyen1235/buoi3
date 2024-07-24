import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'

export default function Student(props) {
    const {student,removeByid, reChecked} = props;
    const handleDoubleClick = () => {
        const newName = prompt("Enter new name:", student.name);
        if (newName !== null) {
          props.editStudent(student.id, newName);
        }
      };
  return (
    <div>
        <ListGroupItem className='student-item'>
            <input type='checkbox' checked= {student.checked} onChange={()=>reChecked(student.id)}></input>
            <p onClick={()=>reChecked(student.id)}  className ={student.checked?"studentname active":"studentname"} onDoubleClick={handleDoubleClick}>{student.name}</p>
            <Button onClick={()=>removeByid(student.id)}><i className="fa-solid fa-xmark"></i></Button>
        </ListGroupItem>
    </div>
  )
}
