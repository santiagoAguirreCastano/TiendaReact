import React from 'react'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
ItemTitles
export const Footer = () => {
  return (
    <footer className="sticky top-0 left-0 z-50 bg-blue-700 px-6 py-5 shadow-xl w-full">
          <div className="flex items-center flex-col gap-5">
       
            <ItemTitles content="Hecho por Santiago Aguirre" styles=" text-white font-bold" />
    
            
            
          </div>
    </footer>
  )
}

 
