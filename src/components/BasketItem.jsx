import React from 'react'

const BasketItem = ({item, product }) => {
  return (
    <div className='flex justify-between items-center gap-5 phone:text-sm '>
        {product.title} x {item.amount} 
        <img className='w-12 h-12 phone:w-8 phone:h-8 my-1' src={product.image} />
    </div>
  )
}

export default BasketItem