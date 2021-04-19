import React from 'react';


var CurrentSku = ({style, handleCurrentSkuTitleClick}) => (
  <div>
    <div>
      <img src={style.url} alt="" />
    </div>
    <div>
      <div
        onClick={() => handleCurrentSkuTitleClick(style)}
      >
        {style.name}
      </div>
      <div>{style.sale_price === null ? style.original_price : style.sale_price}</div>
      <div>style price</div>
    </div>
  </div>
);



export default CurrentSku;