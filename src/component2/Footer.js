import React from 'react'
import { Button, Input } from 'reactstrap'

export default function Footer(props) {
    const{setFlag,checkAll}= props
  return (
    <div>
        <Input type='checkbox' checked={checkAll} onChange={()=>setFlag('checkAll')}></Input>
        <Button className='btn-success mx-1' onClick={()=>setFlag('check')}>filter check</Button>
        <Button className='btn-success mx-1' onClick={()=>setFlag('nocheck')}>filter no check</Button>
        <Button className='btn-success mx-1' onClick={()=>setFlag('clear')}>clear check</Button>
        <Button className='btn-danger mx-1' onClick={() => setFlag('deleteall')}>Delete All</Button>
    </div>
  )
}
