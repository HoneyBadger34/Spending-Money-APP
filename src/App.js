import { useState, useEffect } from "react";

import Header from "./components/Header";
import products from "./products.json"
import Product from "./components/Product";
import Basket from "./components/Basket";



// 27:11

const App = () => {
  
  const [money, setMoney] = useState(5000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0)
    )
    
  }, [basket] )
  
  
  return (
    <div className="App flex flex-col w-full ">
     <Header setBasket={setBasket} total={total} money={money}/>
     <div className="flex">
     <div className="flex w-1/2 flex-1 sm:w-[60%] md:w-[70%]   flex-wrap">
     {
     products.map(product => (
       <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
     ))
     }
     
     </div>
     <div className="w-[50%] sm:w-[40%] md:w-[45%] lg:w-[30%]  flex justify-center ">
     {
       total > 0 && (
        <div className=" flex w-full h-[400px] justify-end mr-5  rounded-xl ">
        <Basket setBasket={setBasket} total={total} products={products}  basket={basket} />
        </div>
       )
     }
     </div>
     </div>
     

    </div>
  );
}

export default App;
