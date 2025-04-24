import React from 'react'

export const SearchProductInput = ({contentInput,SearchProduct}) => {
  return (
    <>
     <input type="text" value={contentInput} onChange={SearchProduct} placeholder="🔍 Buscar productos..." className="m-3 w-full max-w-md px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 text-gray-800 transition-all duration-300"/>

    </>
  )
}

 
