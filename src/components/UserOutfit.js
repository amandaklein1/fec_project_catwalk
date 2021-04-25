import React from 'react';
import { useSelector } from 'react-redux';
import ProductTile from './ProductTile';
import AddOutfitTile from './AddOutfitTile';


const UserOutfit = () => {

  let something;

  return (
    <div>
      <span className="carousel-title">Your Outfit</span>
      <div className="carousel-wrapper">

        <AddOutfitTile />

        <ol className="tiles">

        </ol>

      </div>
    </div>
  );

}

export default UserOutfit;