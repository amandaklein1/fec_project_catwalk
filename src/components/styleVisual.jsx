
import React, { useState, useEffect } from 'react';

function StyleVisual({style}) {

  const [imgMain, setImgMain] = useState(style.photos[0].url)

  useEffect(() => {
    setImgMain(style.photos[0].url)

  }, [style.style_id])


return (
  !style ? <div>Please wait...</div> :
  <div className="currentVisualMain">
    <img className="mainImage" src={imgMain} alt=""/>

      <div className="scroll">
      {
      style.photos.map((photo) => (
          <img key={photo.thumbnail_url} className="mainImageTiles" src={photo.thumbnail_url} alt="" onClick={() => {setImgMain(photo.url)}}/>

      ))
    }
      </div>

</div>
)

}

export default StyleVisual;



