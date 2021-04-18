/* eslint-disable class-methods-use-this */

import React from "react";
import { hot } from 'react-hot-loader/root';
import axios from 'axios';



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
          Hello from React!
        </h1>
        <button onClick={this.handleTestCall} type="button">
          Call API
        </button>
      </>
    );
  }
}

export default App;
