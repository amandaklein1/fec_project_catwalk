import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ModalContent = ({ related, current }) => {

  console.log('aaa', related.features);
  console.log('bbb', current.features);

  let featuresTemplate;
  if (current.features.length > related.features.length) {
    featuresTemplate = current.features;
  } else {
    featuresTemplate = related.features;
  }


  return (
    <table>
      <thead>
        <tr>
          <th>{current.name}</th>
          <td/>
          <th>{related.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{current.category}</td>
          <td>category</td>
          <td>{related.category}</td>
        </tr>
        <tr>
          <td>{current.salePrice === null ? current.defaultPrice : current.salePrice}</td>
          <td>price (avail. disc. applied)</td>
          <td>{related.salePrice === null ? related.defaultPrice : related.salePrice}</td>
        </tr>
        <tr>
          <td>{Math.round(current.ratings*10) / 10}</td>
          <td>customer ratings</td>
          <td>{Math.round(related.ratings*10) / 10}</td>
        </tr>

        {featuresTemplate.map((prodFeature, i) =>
          <tr key={prodFeature.feature}>
            <td>{(current.features[i] && current.features[i].feature) ? current.features[i].value : ''}</td>
            <td>{prodFeature.feature}</td>
            <td>{(related.features[i] && related.features[i].feature) ? related.features[i].value : ''}</td>
          </tr>
        )}
      </tbody>
    </table>
  );

}

export default ModalContent;

// category
// name
// price
// ratings
// features
  // a, b, c

  /*

  <table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>

  */