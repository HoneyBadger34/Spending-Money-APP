import React from 'react'
import { moneyFormat } from './Helpers'

const Header = ({money, total, setBasket}) => {
  
  const resetBasket = () => {
    setBasket([])
  }

  return (
    <div className='flex sticky top-0 bg-pink-300 gap-5 h-16 items-center w-full justify-around' >
        <div className='w-1/3'>
            

            {total > 0 && money - total !== 0 && (
              <div className=' md:text-base lg:text-lg'>
                ${moneyFormat(money - total)} dollars have left to spend!
              </div>
            )}

            {total === 0  && (
              <p>
                You have got ${moneyFormat(money)} dollars to spend!
              </p>
            )}   
            
            {money - total === 0  && (
              <p>
                You do not have enough money to spend!
              </p>
            )}   

            
            
        </div>
        <div>
          <button className='bg-sellRed w-20 h-10 rounded' onClick={resetBasket}>Sell All</button>
        </div>
    </div>
  )
}

export default Header;