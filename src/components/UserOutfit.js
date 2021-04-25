import React from 'react';
import { useSelector } from 'react-redux';
import RelatedProductTile from './RelatedProductTile';
import UserOutfitTile from './UserOutfitTile';


const UserOutfit = () => {

  let something;

  return (
    <div>
      <span className="carousel-title">Your Outfit</span>
      <div className="carousel-wrapper">

        <ol className="tiles">
          <UserOutfitTile />

        </ol>

      </div>
    </div>
  );

}

export default UserOutfit;