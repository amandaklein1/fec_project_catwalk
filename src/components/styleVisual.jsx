
import React, { useState, useEffect } from 'react';

function StyleVisual({style}) {

  const [imgMain, setImgMain] = useState(style.photos[0].url)
  const [imgTiles, setImgTiles] = useState([])

  function getImgTiles() {
    const tileArray = [];

    style.photos.forEach((photo) => (
      tileArray.push(photo)
    ))
    setImgTiles(tileArray)
  }

  useEffect(() => {
    setImgMain(style.photos[0].url)
    getImgTiles()

  }, [style.style_id])


return (
  !style ? <div>Please wait...</div> :
  <div className="currentVisualMain">
    {console.log('image tiles: ', style)}
    <img className="mainImage" src={imgMain} alt=""/>

      <div className="scroll">
      {
      imgTiles.map((photo) => (
          <img key={photo.thumbnail_url} className="mainImageTiles" src={photo.thumbnail_url} alt="" onClick={() => {setImgMain(photo.url)}}/>

      ))
    }
      </div>

</div>
)

}

// const StyleVisual = ({style}) => (

// );
// // $('.carousel').carousel()


export default StyleVisual;



