import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { BsCheckCircle } from "react-icons/bs";
import Thumbnails from './thumbnails';
import StarRatings from './tiles-subcomps/StarRatings';



function StyleList({styles, handleCurrentSkuTitleClick}) {
  const [styleInfo, setStyleInfo] = useState([]);
  const [stars, setStars] = useState({ratings: ''})

  const myId = useSelector(state => state.thumbnails.style_id);

  function getStyleInfo() {
    axios.get(`products/${styles.product_id}`)
      .then(({data}) => (
        setStyleInfo(data)
      ))
  }

  function calcAvgRatings(ratings) {
    let totalScore = 0;
    let totalEntries = 0;

    for (const [score, entry] of Object.entries(ratings)) {
      totalScore += (Number(score) * Number(entry));
      totalEntries += Number(entry);
    }

    return totalScore / totalEntries;
  }

  function getRatings() {
    axios.get('/reviews/meta', {
      params: {
        product_id: styles.product_id
      }
    })
      .then(({data}) => {
        setStars(prevState => ({...prevState, "ratings": calcAvgRatings(data.ratings)}))

      })
      .catch((err) => {
        throw err;
      })
  }

  useEffect(() => {
    getStyleInfo()
    getRatings()
  }, [styles])

  return (
    <div className="transparent">
      <div className="styleInfo">
        <StarRatings className="tile-stars" data={stars}/>
        <div>
          <h3 className="styleTitle">{styleInfo.name}</h3>
        </div>
        <div className="category">{styleInfo.category}</div>
      </div>
      <ul className="thumbnail-grid">
        {
          styles.results.map(style => (
            <Thumbnails
              icon={myId === style.style_id ? <BsCheckCircle /> : delete (<BsCheckCircle />)}
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