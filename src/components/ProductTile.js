/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import StarRatings from './tiles-subcomps/StarRatings';


const ProductTile = ({ tileType, currentId, relId }) => {

  const dispatch = useDispatch();

  let details = {};
  let styles = [];
  let meta = {};
  const [tile, setTile] = useState({});

  const fetchDetails = (fetchType) => {
    if (fetchType === 'related') {
      return axios.get(`/products/${relId}`)
        .then(({data}) => {
          details = data;
          return data;
        })
        .catch((err) => {
          throw err;
        })
    }
  }

  const fetchStyles = (fetchType) => {
    if (fetchType === 'related') {
      return axios.get(`/products/${relId}/styles`)
        .then(({data}) => {
          // console.log('related prod styles:', data.results);
          styles = data.results;
          return data.results;
        })
        .catch((err) => {
          throw err;
        })
    }
  }

  const fetchMeta = (fetchType) => {
    if (fetchType === 'related') {
      return axios.get('/reviews/meta', {
        params: {
          product_id: relId
        }
      })
        .then(({data}) => {
          meta = data;
          return data;
        })
        .catch((err) => {
          throw err;
        })
    }
  }

  const fetchAllRelevantData = (fetchType) => (
    Promise.all([fetchDetails(fetchType), fetchStyles(fetchType), fetchMeta(fetchType)])
      .catch((err) => {
        console.log(err);
      })
  )

  const createPayload = () => {

    const calcAvgRatings = (ratings) => {
      let totalScore = 0;
      let totalEntries = 0;

      for (const [score, entry] of Object.entries(ratings)) {
        totalScore += (Number(score) * Number(entry));
        totalEntries += Number(entry);
      }

      return totalScore / totalEntries;
    }

    const payload = {
      name: details.name,
      category: details.category,
      defaultPrice: `$${details.default_price}`,
      features: details.features,
      ratings: calcAvgRatings(meta.ratings),
      photos: styles[0].photos
    };
    for (let i = 0; i < styles.length; i++) {
      const thisStyle = styles[i];
      if (thisStyle['default?'] === true) {
        payload.defaultStyle = thisStyle.name;
        payload.salePrice = thisStyle.salePrice || null;
        payload.photos = thisStyle.photos;
      }
    }
    return payload;
  }

  useEffect(() => {
    if (tileType === 'related') {
      fetchAllRelevantData(tileType)
        .then((result) => {
          const payload = createPayload();
          setTile(payload);
          return payload;
        })
        .then((payload) => {
          dispatch({
            type: 'ADD_RELATED_PRODUCT',
            payload
          });
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [])

  return (
    // each tile 184px + 5px column gap
    <li className="tile">

      <div className="tile-img-container">
        {tile.photos ?
        <img className="tile-img" src={tile.photos[0].url || 'https://source.unsplash.com/200x100/?corgi'} alt={tile.name} width="150"/> :
        <></>}
      </div>

      <div className="tile-texts-container">
        <div className="tile-category">{tile.category}</div>

        <div className="tile-name">{tile.name}</div>

        {tile.salePrice ?
        <div className="tile-price-container">
          <span className="tile-price sale-price">  {`$${tile.salePrice}`}</span>
          <span className="tile-price full-price">{tile.defaultPrice}</span>
        </div> :
        <div className="tile-price">{tile.defaultPrice}</div>}
      </div>
      <StarRatings className="tile-stars" data={tile}/>


    </li>
  );

};


export default ProductTile;

