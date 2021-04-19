import React from 'react';
import CurrentSku from './currentSkuDetail';

var StyleList = ({styles, handleCurrentSkuTitleClick}) => (
  <div>
    {
      styles.map(style => (
        <CurrentSku
          style={style}
          handleCurrentSkuTitleClick={handleCurrentSkuTitleClick}
        />
      ))
    }
  </div>
);



export default StyleList;