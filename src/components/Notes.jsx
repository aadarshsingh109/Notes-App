import React, { useContext, useState} from 'react'
import Box from './Box.jsx'
import { ColorContext } from '../context/ColorContext.jsx'
const Notes = () => {
    const { notes } = useContext(ColorContext)
    const [searchQuery, setSearchQuery] = useState("");
    const filteredNotes = notes.filter((note) => {
    
    const searchWords = searchQuery.toLowerCase().trim().split(/\s+/);
   
    const noteText = `${note.title}`.toLowerCase();

    return searchWords.every((word) => noteText.includes(word));
  });
  return (
    <div className='flex flex-col px-10 pt-10 pb-5 gap-8 w-[80%] h-screen'>
        <input className='border-2 rounded-2xl bg-gray-200 border-gray-200 px-2.5 py-1 w-60 h-8' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="search" name="" id="" placeholder='Search...' />
      <h1 className='text-3xl font-bold'>Notes</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-scroll'>
        {filteredNotes.map((note) => (
          <Box key={note.id} noteData={note} />
        ))}
        {filteredNotes.length === 0 && searchQuery !== "" && (notes.map((note) => (
          <Box key={note.id} noteData={note} />
        )))}
      </div>

    </div>
  )
}

export default Notes
