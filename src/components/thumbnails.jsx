import React, { useState, useEffect } from 'react';


function Thumbnails ({style, handleCurrentSkuTitleClick, name, icon}) {

  function sendCurrentThumbnail(colorway) {

    if(!colorway) {
      handleCurrentSkuTitleClick(style)
    } else {
      handleCurrentSkuTitleClick(colorway)
    }

  }

  useEffect(() => {
    sendCurrentThumbnail()

  }, [style.style_id])

  return (
    <li key={style.photos[0].thumbnail_url}>
      <div className="title">
      {name}
      </div>
      <div className="centerImg">
        <div className="thumbIcon">{icon}</div>
        <img className="thumbnailImg" src={style.photos[0].thumbnail_url} alt="Avatar" onClick={() => { sendCurrentThumbnail(style)}} />
      </div>
    </li>
  )
}

export default Thumbnails;