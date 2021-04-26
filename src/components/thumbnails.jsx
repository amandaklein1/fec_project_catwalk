import React from 'react';



const Thumbnails = ({style, handleCurrentSkuTitleClick, name}) => (
        <li key={style.photos[0].thumbnail_url}>
          <div className="title">
          {name}
          </div>
          <img className="thumbnailImg" src={style.photos[0].thumbnail_url} alt="Avatar" onClick={() => handleCurrentSkuTitleClick(style)}/>
        </li>
);



export default Thumbnails;