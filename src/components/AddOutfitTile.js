import React from 'react';
import { useSelector } from 'react-redux';
import ProductTile from './ProductTile';

const AddOutfitTile = () => (

  <li className="tile add-outfit-tile">
    <span className="add-outfit-circle" />
    <span className="add-outfit-plus" >+</span>
    <span className="add-outfit-text">Add Outfit</span>
  </li>

)

export default AddOutfitTile;

