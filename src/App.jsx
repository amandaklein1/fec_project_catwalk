/* eslint-disable class-methods-use-this */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import StyleListContainer from '../containers/StyleListContainer';
import StyleVisualContainer from '../containers/styleVisualContainer';
import CartContainer from '../containers/cartContainer';
import RelatedProducts from './components/RelatedProducts';
import UserOutfit from './components/UserOutfit';


const App = () => {

  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState('11001');

  const changeCurrentProduct = (newProductId) => {
    console.log('updating current product');
    setCurrentProduct(newProductId);

  }

  useEffect(() => {
    axios.get(`/products/${currentProduct}/styles`)
    .then(({data}) => {
      dispatch({
        type: 'CHANGE_STYLE_LIST',
        styleList: data
      });
    })
    .catch((err) => {
      throw err;
    });
  });

  return (
    <>

      <div>
      <div className="logo">
         <h1>
        PepManda
      </h1>
         </div>

      <div className="productOverview">
        <div >
          <StyleVisualContainer />
        </div>
        <div className="rightSide">
        <div className="styleInfoAndThumbs">
        <StyleListContainer />
        </div>
        <div>
        <CartContainer />
        </div>
        </div>
        </div>
        <div className="relatedView">
      <RelatedProducts changeCurrentProduct={changeCurrentProduct}/>
      <UserOutfit changeCurrentProduct={changeCurrentProduct}/>
      </div>
      </div>
    </>
  );
}

export default App;


/*

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <h1>
          Project Catwalk App
        </h1>
        <div className="productOverview">
          <div >
            <StyleVisualContainer />
          </div>
          <div>
          <div>
          <StyleListContainer />
          </div>
          <div>
          <CartContainer />
          </div>
          </div>
          </div>
        <RelatedProducts />
        <UserOutfit />

      </>
    );
  }
}

export default App;


*/
