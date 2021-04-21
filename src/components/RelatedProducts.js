import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import RelatedProductTile from './RelatedProductTile';

const RelatedProducts = () => {

  const [relatedIds, setRelatedIds] = useState([]);
  const currentProductId = useSelector(state => state.styleList.product_id); // string 11001

  const fetchRelatedProductsIds = () => {
    axios.get(`/products/${currentProductId}/related`)
      .then(({data}) => {
        setRelatedIds(data);
      })
      .catch((err) => {
        throw err;
      })
  };

  useEffect(() => {
    fetchRelatedProductsIds();
  }, [])


  return (
    <div>
      Related Products Component
      <ol>
        {relatedIds.map((id) => (
          <RelatedProductTile currentId={currentProductId} relId={id} key={id}/>
        ))}
      </ol>
    </div>
  );
};


export default RelatedProducts;