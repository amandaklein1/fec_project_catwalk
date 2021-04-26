import React from 'react'

const ActionButtonRemove = ({ outfitId, outfitIds, setOutfitIds }) => {

  const handleRemove = () => {
    const newList = outfitIds.filter(id => id !== outfitId )
    setOutfitIds(newList);
  }

  return (
    <span className="action-button-remove" onClick={handleRemove}>&#735;</span>
  );

}

export default ActionButtonRemove;