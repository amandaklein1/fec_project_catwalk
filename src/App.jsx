
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleCall() {
    axios.get('/products')
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
        <button onClick={this.handleCall} type="button">
          Call API
        </button>
      </>
    );
  }
}

export default App;
