
import React from 'react';



const StyleVisual = ({style}) => (
  !style ? <div>Please wait...</div> :
    <div className="currentStyleMain">
      {
        style.photos.map((photo) => (

          <div className="largeImage" key={photo.thumbnail_url}>
            <img src={photo.thumbnail_url} alt=""/>
          </div>
        ))
      }
      <div>Style Description</div>
  </div>
);
// $('.carousel').carousel()


export default StyleVisual;



