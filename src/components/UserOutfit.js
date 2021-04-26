import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddOutfitTile from './AddOutfitTile';
import StarRatings from './tiles-subcomps/StarRatings';
import useFetchAndStore from './tiles-subcomps/useFetchAndStore';
import UserOutfitTile from './UserOutfitTile';


const UserOutfit = ({ changeCurrentProduct }) => {

  const [outfitIds, setOutfitIds] = useState([]);
  const currentProductId = useSelector(state => state.styleList.product_id);

  const { details, styles, meta, tile } = useFetchAndStore('outfit', outfitIds[outfitIds.length-1]);

  return (
    <div>
      <span className="carousel-title">Your Outfit</span>
      <div className="carousel-wrapper">

        <ol className="tiles">

          <AddOutfitTile outfitIds={outfitIds} updateOutfitIds={setOutfitIds} currentProductId={currentProductId}/>

          {outfitIds.map((id) => (
            <UserOutfitTile outfitId={id} key={id} changeCurrentProduct={changeCurrentProduct}/>
          ))}

        </ol>

      </div>
    </div>
  );

}

export default UserOutfit;