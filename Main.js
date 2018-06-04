import React from 'react';
import ReactDOM from 'react-dom';


//import App from './src/counter.jsx';
import Text from './src/proto.jsx';
import Countdown from 'react-countdown-now';
//import App from './src/App.jsx'
import {Router,Route, browserHistory} from "react-router";
import Page1 from './src/El_Paradigma.jsx'
require('./src/css/background.css');
class App extends React.Component{
    render(){
        return(
            <div>
              
            <Page1/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
