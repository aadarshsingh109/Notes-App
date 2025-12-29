import React, { useContext, useState } from 'react'
import '../App.css'
import Button from './Button'
import { ColorContext } from '../context/colorContext'
const Navbar = () => {
  const[color,openColor] = useState(false)
  function color1(){
    openColor((c)=> !c)
  }
  const{colors,setSelectedColor, addNote}= useContext(ColorContext)
  return (
    <div className="h-screen w-[30%] xl:w-[11%] lg:w-[11%] md:w-[15%] sm:w-[20%]  border-r border-gray-300 flex flex-col items-center gap-6 overflow-hidden">
      <h1 className='pt-10 text-2xl font-bold'>To-Do</h1>
      <Button txtclr = {"text-white"}
        bgclr = {"bg-black"}
        fade = {false}
        onclick = {color1}
        anidel = {false}
      >+</Button>
      {
        color && (<div className='flex flex-col gap-5'> 
        {
          colors.map((clrclass,index)=>{
            return (<Button key={index}
              bgclr = {clrclass} fade = {true} anidel = {true} onclick={()=> {setSelectedColor(clrclass)
                openColor(false)
                addNote(clrclass);
              }}
            >

            </Button>)
          })
        }
        
        
       </div>
      )}
    </div>
  )
}

export default Navbar
