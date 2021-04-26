/* eslint-disable class-methods-use-this */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import StyleListContainer from '../containers/StyleListContainer';
import StyleVisualContainer from '../containers/styleVisualContainer';
import CartContainer from '../containers/cartContainer';
import RelatedProducts from './components/RelatedProducts';
import UserOutfit from './components/UserOutfit';


const App = () => {

  const [currentProduct, setCurrentProduct] = useState('');

  const changeCurrentProduct = (newProductId) => {
    console.log('setting new product ID in App.jsx');
    setCurrentProduct(newProductId);
  }

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
      <RelatedProducts changeCurrentProduct={changeCurrentProduct}/>
      <UserOutfit changeCurrentProduct={changeCurrentProduct}/>

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
