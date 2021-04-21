import React from 'react';



const Thumbnails = ({style, handleCurrentSkuTitleClick, name, id}) => (
  <div className="thumbnail">
        <div key={style.photos[0].thumbnail_url} xs={6} md={4}>
          <div onClick={() => handleCurrentSkuTitleClick(style)}>
          {name}
          </div>
          <img className="thumbnailImg" src={style.photos[0].thumbnail_url} alt="Avatar"/>
        </div>
      {/* ))} */}
  </div>
);



export default Thumbnails;