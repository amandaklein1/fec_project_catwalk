import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ModalContent = ({ related, current }) => {

  let featuresTemplate;
  if (current.features.length > related.features.length) {
    featuresTemplate = current.features;
  } else {
    featuresTemplate = related.features;
  }


  return (
    <table className="content-table">
      <thead>
        <tr className="table-headers">
          <th>{current.name}</th>
          <td>vs</td>
          <th>{related.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{current.category}</td>
          <td className="table-metric">Category</td>
          <td>{related.category}</td>
        </tr>
        <tr>
          <td>{current.salePrice === null ? current.defaultPrice : current.salePrice}</td>
          <td className="table-metric">Price</td>
          <td>{related.salePrice ? related.salePrice : related.defaultPrice}</td>
        </tr>
        <tr>
          <td>{Math.round(current.ratings*10) / 10}</td>
          <td className="table-metric">Customer Ratings</td>
          <td>{Math.round(related.ratings*10) / 10}</td>
        </tr>

        {featuresTemplate.map((prodFeature, i) =>
          <tr key={prodFeature.feature}>
            <td>{(current.features[i] && current.features[i].feature) ? current.features[i].value : 'n/a'}</td>
            <td className="table-metric">{prodFeature.feature}</td>
            <td>{(related.features[i] && related.features[i].feature) ? related.features[i].value : 'n/a'}</td>
          </tr>
        )}
      </tbody>
    </table>
  );

}

export default ModalContent;
