import React from 'react';

/* StarRatings expects an object props with a rating property:

    {
      rating: 3.33
    }

  This component relies on :root and .Stars scss rules defined inside of styles.scss
*/

const StarRatings = ( { data } ) => {

  const rating = Math.round(data.ratings * 4) / 4;

  return (
    <div className="Stars" style={{'--rating': rating}} />
  );

}

export default StarRatings;
