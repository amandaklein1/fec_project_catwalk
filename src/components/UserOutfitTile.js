import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from './tiles-subcomps/StarRatings';
import useFetchAndStore from './tiles-subcomps/useFetchAndStore';

const UserOutfitTile = ({ outfitId }) => {

  const { details, styles, meta, tile } = useFetchAndStore('outfit', outfitId);

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

}


export default UserOutfitTile;