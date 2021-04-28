import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Thumbnails from './thumbnails';
import StarRatings from './tiles-subcomps/StarRatings';


function StyleList({styles, handleCurrentSkuTitleClick}) {
  const [styleInfo, setStyleInfo] = useState([]);

  function getStyleInfo() {
    axios.get(`products/${styles.product_id}`)
      .then(({data}) => (
        setStyleInfo(data)
      ))
  }

  // function getRatings() {
  //   axios.get('/reviews/meta', {
  //     params: {
  //       product_id: styles.product_id
  //     }
  //   })
  //     .then(({meta}) => {
  //       console.log('hope this worked: ', meta)
  //     })
  //     // .catch((err) => {
  //     //   throw err;
  //     // })
  //   }

  useEffect(() => {
    getStyleInfo()
    // getRatings()
  }, [styles])

  return (
    <div className="transparent">
      {console.log('What is happening: ', styles)}
      <div className="styleInfo">
      <StarRatings className="tile-stars" data={styles}/>
      {console.log('hi amanda:', styleInfo)}
    <div>
      <h3 className="styleTitle">{styleInfo.name}</h3>
    </div>
    <div className="category">{styleInfo.category}</div>
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