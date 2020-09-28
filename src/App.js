import React ,{Component} from "react";
import "./style.css";
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);    
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    )
  }
}


