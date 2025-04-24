import React from 'react'

export const Card = (products) => {
const {title,price,description,category,image} = products
    return (
    
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-[30rem] align-center gap-3'>
        <h2 className='text-[1.5rem]'>{title}</h2>
        <h3 className='text-[0.8rem]'>{price}</h3>
        <p className='text-[0.8rem]'>{description}</p>
        <h3 className=''>{category}</h3>
        <img src={image} alt="" className='rounded-lg h-[10rem]'/>    

    </div>
  )
}

 
