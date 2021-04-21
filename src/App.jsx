/* eslint-disable class-methods-use-this */

import React from "react";
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import StyleListContainer from '../containers/StyleListContainer';
import StyleVisualContainer from '../containers/styleVisualContainer';
import CartContainer from '../containers/cartContainer';
import RelatedProducts from './components/RelatedProducts';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleTestCall() {
    axios.get('/reviews/meta', {
      params: {
        product_id: 11003
      }
    })
      .then(({data}) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    return (
      <>
        <h1>
          Project Catwalk App
        </h1>
        <button onClick={this.handleTestCall} type="button">
          Call API
        </button>
        <div className="productOverview">
          <div className="shownImage">
            <StyleVisualContainer />
          </div>
          <div className="styleInfo">
          <div className="thumbnailList">
          <StyleListContainer />
          </div>
          <div className="cartList">
          <CartContainer />
          </div>
          </div>
        </div>
        <RelatedProducts/>
      </>
    );
  }
}

export default App;
