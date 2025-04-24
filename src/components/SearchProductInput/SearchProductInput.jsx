import React from 'react'

export const SearchProductInput = ({contentInput,SearchProduct}) => {
  return (
    <>
     <input type="text" value={contentInput} onChange={SearchProduct} placeholder="Buscar producto..." className="border px-4 py-2 mb-4 rounded-md w-full max-w-md" />
    </>
  )
}

 
