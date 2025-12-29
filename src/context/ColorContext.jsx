import { createContext, useEffect, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  // Define the 5 specific colors you want to use
  const colors = [
    "bg-[#FFB346]", 
    "bg-[#FF8B64]", 
    "bg-[#A37AC2]", 
    "bg-[#87CEEB]", 
    "bg-[#E4D00A]"
  ];
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("my_notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("my_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (clrClass) => {
    const newNote = {
      id: Date.now(),
      title: "",
      content: "",
      color: clrClass,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setNotes([newNote, ...notes]); // Adds new note to the top of the list
  };

  const updateNote = (id, field, value) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, [field]: value } : n));
  };
  const deleteNote = (id) => {
  // We keep only the notes that DON'T match the id we want to delete
  setNotes((prev) => prev.filter((note) => note.id !== id));
};
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <ColorContext.Provider value={{ colors, selectedColor, setSelectedColor ,notes,addNote,updateNote, deleteNote}}>
      {children}
    </ColorContext.Provider>
  );
};