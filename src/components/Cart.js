import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Cart.css"
function Cart() {
    const navigate = useNavigate();
  return (
    <div className='cart__container'>
        <div className='cart__title'>
            <h2>Shopping Cart</h2>
        </div>
        {false ? (
            
            <div className='empty__container'>
              <div className='empty__cart'>
                Cart is empty
                </div>
                <button
                
                onClick={()=>navigate("/shop")}
                className='empty__continueShopping'>
                    Continue Shopping
                    </button>
        </div>
        
        
        ):(
            <>
            
            <div className='cart__elements'>
            <div className='cart__productName'>
                Product Name
            </div>
            <div className='cart__quantity'>
                Quantity
            </div>
            <div className='cart__price'>
                Price
            </div>
            <div className='cart__total'> Sub Total
            </div>
            </div>
            
                
                
                <div className='cart__items'>
                <div className='cart__content'>
             <div className='item__name'>
             <div  
             className={`item__image1`}/>
             <h4>Game of Thrones</h4>
         </div>
         <div className='item__quantity'>
            <div className='item__increase__decrease'>
            <button
            >-</button>2
            <button >+</button>
            </div>
            </div>
         <div className='item__price'>₹ 90</div>
         <div className='item__total'>₹ 43</div>
        
         </div>
          </div>
            
            <button 
            className='clear__cart'
            >Clear Cart</button>

            <div className='cart__sumtotal'>
                <h3>Total:₹ 500</h3>
                
                <button
               
                 className='checkout__btn'>
                     CHECK OUT</button>
                <button
                className='continue__shopping'
                onClick={()=>navigate("/shop")}
                >Continue Shopping</button>
            </div>
                </>
                )}
                </div>
  )
}

export default Cart