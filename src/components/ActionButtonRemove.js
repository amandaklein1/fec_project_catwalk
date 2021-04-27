import React from 'react'
import { useDispatch, useSelector } from 'react-redux';



const ActionButtonRemove = ({ outfitId, outfitIds, setOutfitIds }) => {

  const savedOutfits = useSelector(state => state.userOutfits);

  const handleRemove = () => {
    const newList = outfitIds.filter(id => id !== outfitId )
    setOutfitIds(newList);
  }

  const dispatch = useDispatch();

  return (
    <span className="action-button-remove" onClick={() => {

        const remainingOutfits = [];
        for (let i = 0; i < savedOutfits.length; i++) {
          if (String(savedOutfits[i].id) !== outfitId) {
            remainingOutfits.push(savedOutfits[i]);
          }
        }
        console.log('remaining outfits', remainingOutfits);
        dispatch({
          type: 'REMOVE_USER_OUTFIT',
          payload: remainingOutfits
        });
        handleRemove();
      }}>
      &#735;
    </span>
  );

}

export default ActionButtonRemove;




// const ActionButtonRemove = ({ tile }) => {

//   const handleRemove = () => {
//     const newList = outfitIds.filter(id => id !== outfitId )
//     setOutfitIds(newList);
//   }

//   return (
//     <span className="action-button-remove" onClick={handleRemove}>&#735;</span>
//   );

// }

// export default ActionButtonRemove;



