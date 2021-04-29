import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddOutfitTile from './AddOutfitTile';
import StarRatings from './tiles-subcomps/StarRatings';
import useFetchAndStore from './tiles-subcomps/useFetchAndStore';
import UserOutfitTile from './UserOutfitTile';


const UserOutfit = ({ changeCurrentProduct }) => {


  const savedOutfits = useSelector(state => state.userOutfits);
  const pluckedIds = savedOutfits.map(outfit => outfit.id);

  const [outfitIds, setOutfitIds] = useState([...pluckedIds]);

  const currentProductId = useSelector(state => state.styleList.product_id);

  console.log('about to add user outfit again');
  useFetchAndStore('outfit', outfitIds[outfitIds.length-1]);


  return (
    <div id="user-outfit-widget">
      <span className="carousel-title">Your Outfit</span>
      <div>

        <ol className="tiles">

          <AddOutfitTile outfitIds={outfitIds} setOutfitIds={setOutfitIds} currentProductId={currentProductId}/>

          {outfitIds.map((id) => (
            id && <UserOutfitTile outfitId={id} key={id} changeCurrentProduct={changeCurrentProduct} outfitIds={outfitIds} setOutfitIds={setOutfitIds} currentProductId={currentProductId}/>
          ))}

        </ol>

      </div>
    </div>
  );

}

export default UserOutfit;

