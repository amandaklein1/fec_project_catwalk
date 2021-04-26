
import React from 'react';



const StyleVisual = ({style}) => (
  !style ? <div>Please wait...</div> :
    <div className="currentVisualMain">
      {
        style.photos.map((photo) => (
          <div  key={photo.thumbnail_url}>
            <img className="largeImage" src={photo.thumbnail_url} alt=""/>
          </div>
        ))
      }
  </div>
);
// $('.carousel').carousel()


export default StyleVisual;



