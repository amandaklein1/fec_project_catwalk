import React, { useState, useEffect } from 'react';
import Thumbnails from './thumbnails';
import axios from 'axios';

function StyleList({styles, handleCurrentSkuTitleClick}) {
  const [styleInfo, setStyleInfo] = useState([]);

  function getStyleInfo() {
    axios.get(`products/${styles.product_id}`)
      .then(({data}) => (
        setStyleInfo(data)

      ))
  }

  useEffect(() => {
    getStyleInfo()
  }, [])

  return (
    <div>
    {console.log(styleInfo)}
      <div>{styleInfo.category}</div>
      <h3>{styleInfo.name}</h3>
      <div className="thumbnails">
        {
          styles.results.map(style => (
            <Thumbnails
              key={style.name}
              name={style.name}
              style={style}
              handleCurrentSkuTitleClick={handleCurrentSkuTitleClick}
            />
          ))
        }
      </div>
      </div>
  )
}

export default StyleList;