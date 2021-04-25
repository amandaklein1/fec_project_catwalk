import React from 'react';
// import { useSelector } from 'react-redux';

const AddOutfitTile = ({ outfitIds, updateOutfitIds, currentProductId }) => {

  const handleAdd = () => {
    if (!outfitIds.includes(currentProductId)) {
      updateOutfitIds([...outfitIds, currentProductId])
    }
  }

  return (
    <li className="tile add-outfit-tile" onClick={handleAdd}>
      <span className="add-outfit-circle"/>
      <span className="add-outfit-plus" >+</span>
      <span className="add-outfit-text">Add Outfit</span>
    </li>
  );

}

export default AddOutfitTile;

