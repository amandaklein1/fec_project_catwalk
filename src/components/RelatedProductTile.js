/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import StarRatings from './tiles-subcomps/StarRatings';
import useFetchAndStore from './tiles-subcomps/useFetchAndStore';


const RelatedProductTile = ({ tileType, relId }) => {

  const { details, styles, meta, tile } = useFetchAndStore('related', relId);

  return (
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


export default RelatedProductTile;





/*

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

  let target;
  if (tileType === 'related') {
    target = relId
  } else if (tileType === 'outfit') {
    target = currentId
  }

  const fetchDetails = () => (
    axios.get(`/products/${target}`)
      .then(({data}) => {
        details = data;
        return data;
      })
      .catch((err) => {
        throw err;
      })
  )

  const fetchStyles = () => (
    axios.get(`/products/${target}/styles`)
      .then(({data}) => {
        styles = data.results;
        return data.results;
      })
      .catch((err) => {
        throw err;
      })
  )

  const fetchMeta = () => (
    axios.get('/reviews/meta', {
      params: {
        product_id: target
      }
    })
      .then(({data}) => {
        meta = data;
        return data;
      })
      .catch((err) => {
        throw err;
      })
  )

  const fetchAllRelevantData = () => (
    Promise.all([fetchDetails(), fetchStyles(), fetchMeta()])
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

    fetchAllRelevantData()
      .then((result) => {
        const payload = createPayload();
        setTile(payload);
        return payload;
      })
      .then((payload) => {
        if (tileType === 'related') {
          dispatch({
            type: 'ADD_RELATED_PRODUCT',
            payload
          });
        } else if (tileType === 'outfit') {
          dispatch({
            type: 'ADD_USER_OUTFIT',
            payload
          });
        }
      })
      .catch((err) => {
        throw err;
      });

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

*/
