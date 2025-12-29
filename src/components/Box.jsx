import React, { useContext, useState } from 'react'
import Button from './Button'
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { ColorContext } from '../context/colorContext';
import { RiDeleteBin7Fill } from "react-icons/ri";

const Box = ({noteData}) => {
    const { updateNote, deleteNote } = useContext(ColorContext);
    const[isEditing,setIsediting] = useState(true)
    function update(){

    }
  return (
    <div className={`${noteData.color} text-black p-4 rounded-4xl h-50`}>
        <div className='flex justify-center items-center'>
            <input className='w-[90%] h-[10%] outline-0 font-bold' readOnly={!isEditing} value={noteData.title} onChange={(e) => updateNote(noteData.id, 'title', e.target.value)} type="text" placeholder='Title' />
            <RiDeleteBin7Fill className='w-[10%]'onClick={() => deleteNote(noteData.id)} />
        </div>
        
      <textarea className='w-full h-[75%] outline-0 resize-none scroll-auto custom-scrollbar' readOnly={!isEditing} value={noteData.content}
        onChange={(e) => updateNote(noteData.id, 'content', e.target.value)} placeholder='enter note...' name="" id=""></textarea>
      <div className='flex justify-between items-center h-[5%]'>
        <p>{noteData.date}</p>
        <Button onclick={()=> setIsediting(!isEditing)}> {isEditing ? <HiPencil /> : <FaEye />} </Button>
      </div>
    </div>
  )
}

export default Box
