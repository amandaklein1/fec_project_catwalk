
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hot } from 'react-hot-loader/root';



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
          Hello Fantastic Four!
        </h1>
        <button type="button" className="btn btn-primary">
          This is a bootstrap button
        </button>
      </>
    );
  }
}

export default App;
