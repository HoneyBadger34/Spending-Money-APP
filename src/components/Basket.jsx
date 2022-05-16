import React from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from './Helpers'

const Basket = ({basket, products, total, setBasket, item}) => {
    
    const resetBasket = () => {
        setBasket([])
      }
  
    return (
    <div className='flex flex-col w-[90%] h-[500px] border p-3 justify-between  mt-8 overflow-auto'>
        <div>
        {
            basket.map(item => (
                <BasketItem item={item} product={products.find(p => p.id === item.id )} />
            ))
        }
        </div>
        <div>
        <div className='text-right font-bold my-5 text-buyGreen'>
            <hr className='my-1' />
            Total: ${moneyFormat(total)}
            
        </div>
        <div className=''>
          <button className='bg-sellRed phone:w-15 phone:h-8 w-20 h-10 rounded' onClick={resetBasket}>Sell All</button>
        </div>
        </div>
    </div>
  )
}

export default Basket