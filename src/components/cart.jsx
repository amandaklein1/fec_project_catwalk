
import React from 'react';



const Cart = ({style}) => (
  !style ? <div>Please wait...</div> :
    <div className="currentStyleMain">
      <div>
        {console.log('this is my cart: ', style)}
      </div>
      <div>
        {
        style.sale_price === null ?
        <div className="price"> {style.original_price} </div> : <div className="price">
          <div className="orgPrice">{style.original_price}</div>
          <div className="salePrice">{style.sale_price}</div>
        </div>
      }
      </div>
      <div className="sizeOptions">
      <div>
        size
      </div>
      <div>
        size dropdown
      </div>
      </div>
      <div>
        Add To Bag
      </div>
  </div>
);



export default Cart;