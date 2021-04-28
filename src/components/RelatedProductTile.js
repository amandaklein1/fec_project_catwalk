/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Modal from 'react-modal';
import StarRatings from './tiles-subcomps/StarRatings';
import useFetchAndStore from './tiles-subcomps/useFetchAndStore';
import ModalContent from './ModalContent';

Modal.setAppElement('#app');

const RelatedProductTile = ({ tileType, relId, changeCurrentProduct }) => {

  const [modalOpen, setModalOpen] = useState(false);

  // fetches related product's information & store to redux state
  const { tile } = useFetchAndStore('related', relId);
  // fetches current product's information
  const currentProdTile = useFetchAndStore('current', 11001);

  return (
    <>
      {(tile.photos && tile.photos[0].url) ?

        <div className="tile">

          <div className="tile-img-container">

            <span
              className="action-button-star"
              onClick={() => {
                setModalOpen(true);
              }}
              >
            &#x2606;</span>

            {tile.photos ?
            <img className="tile-img" src={tile.photos[0].url || 'https://source.unsplash.com/300x200/?sunglasses'} alt={tile.name} width="150" onClick={() => changeCurrentProduct(relId)}/> :
            <></>}

          </div>

          <div className="tile-texts-container">
            <div className="tile-category">{tile.category}</div>

            <div className="tile-name">{tile.name}</div>

            {tile.salePrice ?
            <div className="tile-price-container">
              <span className="tile-price sale-price">  {`$${tile.salePrice}`}</span>
              <span className="tile-price full-price">{tile.defaultPrice}</span>
            </div> :
            <div className="tile-price">{tile.defaultPrice}</div>}
          </div>
          <StarRatings className="tile-stars" data={tile}/>

        </div> :
        <></>
      }
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}>
        <ModalContent
          related={tile}
          current={currentProdTile.tile}
        />
      </Modal>
    </>


  );

};


export default RelatedProductTile;




