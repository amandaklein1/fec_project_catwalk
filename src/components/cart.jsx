
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
Issues as I understand:
- when user selects size, the available QTYs do not populate immediately


*/

function Cart({style}) {
  // API call to GET /products/id
  const [styleInfo, setStyleInfo] = useState([]);

  // user selected size
  const [selectedSize, setSize] = useState('');
  // ...updates qtys available in that size
  const [qtyBySize, setQtyBySize] = useState([]);
  // user selected qty to check out
  const [selectedQty, setQty] = useState('');
  // all available sizes and qtys of that SKU
  const [skuDetail, setSkuDetail] = useState([]);
  // when size selected, updates with {qty 16, size S}
  const [selectedSizeAndQty, setSelectedSizeAndQty] = useState({});
  let selectedSizeQty = {};

  function getStyleInfo() {
    axios.get(`products/11001`)
      .then(({data}) => (
        setStyleInfo(data)

      ))
      .catch((err) => {
        throw err;
      })
  }

  function getSkuDetail(skus) {

    setSkuDetail(Object.values(skus))

  }

  function assignSizeAndQty(sizeQtyObj) {
    let qtyArray = [];

    if (sizeQtyObj !== undefined) {
      setSize(sizeQtyObj.size);
    if (sizeQtyObj.quantity > 15) {
      for(let i = 1; i < 15; i++) {
      qtyArray.push(i);
    }
    } else {
      for(let i = 1; i < sizeQtyObj.quantity; i++) {
        qtyArray.push(i);
      }
    }
      setQtyBySize(qtyArray)
    }
  }

  function getSizeAndQty(sizeIndex) {
// skuDetail
//     0: {quantity: 8, size: "XS"}
// 1: {quantity: 16, size: "S"}
// 2: {quantity: 17, size: "M"}
// 3: {quantity: 10, size: "L"}
// 4: {quantity: 15, size: "XL"}
// 5: {quantity: 6, size: "XXL"}

//selectedSizeAndQty
{/* //{quantity: 15, size: "XL"} */}

    setSelectedSizeAndQty(skuDetail[sizeIndex]);
    selectedSizeQty = skuDetail[sizeIndex];

    // assignSizeAndQty(selectedSizeAndQty)
    assignSizeAndQty(selectedSizeQty)

  }




  useEffect(() => {
    getStyleInfo() // fetch prod desc by id
    getSkuDetail(style.skus) // all qty/size combos
    // assignSizeAndQty()
    // getSizeAndQty()

  }, [])




  return (
    !style ? <div>Please wait...</div> :
    <div className="currentStyleMain">
      <div>
        {console.log('this is my cart: ',
        skuDetail
        )}

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
      <div className="dropdown">
        <select value={selectedSize} onChange={e => getSizeAndQty(e.target.value)}>
          <option>Select a size...</option>
          {skuDetail.map((sku, index) => (
            <option key={sku.size} name={sku.quantity} value={index}>
              {sku.size}
            </option>
          ))}
        </select>
        {console.log('this is my size: ', selectedSize)}
        {console.log('this is my qty: ', qtyBySize)}
        {console.log('this is my size and qty: ', selectedSizeAndQty)}
      </div>
      <select value={selectedQty} onChange={e => setQty(e.target.value)}>
          <option>QTY</option>
          {qtyBySize.map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>
      <button>
        Add To Bag
      </button>
      <p className="styleDescription">{styleInfo.description}</p>
  </div>
  )
}





// const Cart = ({style}) => (
//   !style ? <div>Please wait...</div> :
//     <div className="currentStyleMain">
//       <div>
//         {console.log('this is my cart: ', style)}
//       </div>
//       <div>
//         {
//         style.sale_price === null ?
//         <div className="price"> {style.original_price} </div> : <div className="price">
//           <div className="orgPrice">{style.original_price}</div>
//           <div className="salePrice">{style.sale_price}</div>
//         </div>
//       }
//       </div>
//       <div className="sizeOptions">
//       <div>
//         size
//       </div>
//       <div>
//         size dropdown
//       </div>
//       </div>
//       <div>
//         Add To Bag
//       </div>
//   </div>
// );



export default Cart;