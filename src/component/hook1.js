import React, { useState } from "react";

export default function Hook(){
    const [sutdent,setStudent]= useState ({name:"",age:0})
    return(
        <div>
            <h1>Em tên là: {sutdent.name} và tuổi là: {sutdent.age}</h1>
            <from>
                <input type="text" placeholder="Nhập tên" onChange={(e)=>setStudent({...sutdent,name:e.target.value})}/>
                <input type="number" placeholder="Nhập tuổi" onChange={(e)=>setStudent({...sutdent,age:e.target.value})}/>
            </from>
        </div>
    )
}