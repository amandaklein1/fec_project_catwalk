
import React, { useState, useEffect } from 'react';

function StyleVisual({style}) {

  const [imgMain, setImgMain] = useState(style.photos[0].thumbnail_url)
  const [imgTiles, setImgTiles] = useState([])

  function getImgTiles() {
    const tileArray = [];

    style.photos.forEach((photo) => (
      tileArray.push(photo.thumbnail_url)
    ))
    setImgTiles(tileArray)
  }

  useEffect(() => {
    setImgMain(style.photos[0].thumbnail_url)
    getImgTiles()

  }, [style.style_id])


return (
  !style ? <div>Please wait...</div> :
  <div className="currentVisualMain">
    {console.log('image tiles: ', imgTiles)}
    <img className="mainImage" src={imgMain} alt=""/>
    {
      imgTiles.map((photo) => (
        <div  key={photo}>
          <img className="largeImage" src={photo} alt="" onClick={() => {setImgMain(photo)}}/>
        </div>
      ))
    }
</div>
)

}

// const StyleVisual = ({style}) => (

// );
// // $('.carousel').carousel()


export default StyleVisual;



