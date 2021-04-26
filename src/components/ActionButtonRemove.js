import React from 'react'

const ActionButtonRemove = ({ outfitId, outfitIds, setOutfitIds }) => {

  const handleRemove = () => {
    const newList = outfitIds.filter(id => id !== outfitId )
    setOutfitIds(newList);
  }

  return (
    <span className="action-button-remove" onClick={handleRemove}>x</span>
  );

}

export default ActionButtonRemove;