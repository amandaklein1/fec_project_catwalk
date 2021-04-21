/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


const RelatedProductTile = ({ currentId, relId }) => {

  const dispatch = useDispatch();

  let details = {};
  let styles = [];
  let meta = {};
  const [tile, setTile] = useState({});

  const fetchDetails = () => (
    axios.get(`/products/${relId}`)
      .then(({data}) => {
        details = data;
        return data;
      })
      .catch((err) => {
        throw err;
      })
  )

  const fetchStyles = () => (
    axios.get(`/products/${relId}/styles`)
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
      defaultPrice: details.default_price,
      features: details.features,
      ratings: calcAvgRatings(meta.ratings)
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
        dispatch({
          type: 'ADD_RELATED_PRODUCT',
          payload
        });
      })
      .catch((err) => {
        throw err;
      });
  }, [])

  return (
    <li>
      {tile.name}
    </li>
  );

};


export default RelatedProductTile;