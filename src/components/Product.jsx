import React from 'react'
import { moneyFormat } from './Helpers'



const Product = ({ product, basket, setBasket, total, money }) => {
  
  
    const addBasket = () => {
      const checkBasket = basket.find(item => item.id === product.id )
      // means product has already been added!
      if (checkBasket){
        checkBasket.amount += 1
        setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
      } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1    
            }])
      }
    }

    const removeBasket = () => {
      const currentBasket = basket.find(item => item.id === product.id)
      const basketWithoutCurrent = basket.filter(item => item.id !== product.id )
      currentBasket.amount -= 1
      if ( currentBasket.amount === 0 ){
        setBasket([...basketWithoutCurrent])
      }else {
        setBasket([...basketWithoutCurrent, currentBasket])
      }
    }

    
     const basketItem = basket.find(item => item.id === product.id)

  
    return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4  h-64 justify-around items-center flex flex-col  mt-8 flex-wrap border'>
        
        <div className='flex justify-center items-center my-3' >
            <h2>
                {product.title}
            </h2>
        </div>
        
        <div className='flex justify-center items-center'>
            <img className='w-30 h-32' src={product.image} />
        </div>     
        
          
        <div className='flex flex-col w-full justify-center items-center'>
            
            <p >${moneyFormat(product.price)}</p>
            
            <div className=' flex w-full justify-center items-center'>
                <button disabled={total + product.price > money } onClick={addBasket} className='bg-buyGreen w-[30%] sm:w-[30%] md:w-[35%] lg:w-[40%] sm:text-xs md:text-sm lg:text-base  h-10 mt-3 rounded-l disabled:opacity-30 disabled:cursor-no-drop'>Buy</button>
                 <span className='mx-3 w-[5%] sm:text-sm md:text-base lg:text-xl text-center'>{basketItem && basketItem.amount || 0}</span>
                <button disabled={!basketItem} onClick={removeBasket} className='bg-sellRed w-[30%] sm:w-[30%] md:w-[35%] lg:w-[40%] sm:text-xs md:text-sm lg:text-base  h-10 mt-3 rounded-r disabled:opacity-30 disabled:cursor-no-drop'>Sell</button>
            </div>
        </div>   

      
    </div>
    
  )
}

export default Product