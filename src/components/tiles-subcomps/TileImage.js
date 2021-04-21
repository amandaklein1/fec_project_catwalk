import React, { useState, useEffect } from 'react';

const TileImage = ( { tile } ) => {

  // const imageURL = tile.photos[0].url || 'https://source.unsplash.com/200x100/?corgi';
  const {category, name, defaultPrice, salePrice, photos} = tile;
  console.log('photos', photos);
  return (
    <>
      <div>{name}</div>
      <div>{category}</div>
    </>
  );

}

export default TileImage;