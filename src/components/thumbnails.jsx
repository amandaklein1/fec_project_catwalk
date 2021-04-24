import React from 'react';



const Thumbnails = ({style, handleCurrentSkuTitleClick, name}) => (
  <div className="thumbnail">
        <div key={style.photos[0].thumbnail_url}>
          <div>
          {name}
          </div>
          <img className="thumbnailImg" src={style.photos[0].thumbnail_url} alt="Avatar" onClick={() => handleCurrentSkuTitleClick(style)}/>
        </div>
  </div>
);



export default Thumbnails;