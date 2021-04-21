import React from 'react';
import Thumbnails from './thumbnails';

const StyleList = ({styles, handleCurrentSkuTitleClick}) => (
  <div>
    <h3>{styles.product_id}</h3>
  <div className="thumbnails">
    {
      styles.results.map(style => (
        <Thumbnails
          key={style.name}
          id={styles.product_id}
          name={style.name}
          style={style}
          handleCurrentSkuTitleClick={handleCurrentSkuTitleClick}
        />
      ))
    }
  </div>
  </div>
);



export default StyleList;