/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetchAndStore from './tiles-subcomps/useFetchAndStore';


const AddOutfitTile = ({ outfitIds, setOutfitIds, currentProductId }) => {


  const handleAdd = () => {
    if (!outfitIds.includes(currentProductId)) {
      setOutfitIds([...outfitIds, currentProductId])
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



// const AddOutfitTile = () => {

//   const currentProductId = useSelector(state => state.styleList.product_id);
//   const [id, setId] = useState(currentProductId);
//   const [outfit, setOutfit] = useState({});
//   console.log('id', id);
//   const { details, styles, meta, tile } = useFetchAndStore('outfit', id);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     setId(currentProductId)
//   }, [currentProductId]);

//   useEffect(() => {
//     setOutfit(tile)
//   }, [tile]);

//   return (
//     <li
//       className="tile add-outfit-tile"
//       onClick={() => {
//         console.log('the tile', outfit);
//         dispatch({
//           type: 'ADD_USER_OUTFIT',
//           payload: outfit
//         })}}>
//       <span className="add-outfit-circle"/>
//       <span className="add-outfit-plus" >+</span>
//       <span className="add-outfit-text">Add Outfit</span>
//     </li>
//   );

// }

// export default AddOutfitTile;




