import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Thumbnails from './thumbnails';


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
  }, [styles])

  return (
    <div className="styleInfoAndThumbs">
      <div className="styleInfo">
      <div>{styleInfo.category}</div>
    <div>
      <h3>{styleInfo.name}</h3>
    </div>
    </div>
      <ul className="thumbnail-grid">
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
      </ul>
      </div>
  )
}

export default StyleList;