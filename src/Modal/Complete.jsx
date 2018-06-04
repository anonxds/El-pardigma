import React, { Component } from 'react';
import Modal from 'react-modal';
import  Part2  from "../Part2.jsx"
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from 'react-router-dom';
require('../css/background.css');
require('../css/button.css');
export default class Result extends Component{
    constructor(props){
        super(props);
        this.state={
            Close: true
        }
        this.CloseModal = this.CloseModal.bind(this);
        this.reset = this.reset.bind(this);
    }
    reset(){
    localStorage.clear();
    window.location.reload();
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    CloseModal(){
        console.log("x")
        this.setState({Close:false})
    }
    render(){
        return(
                <div>
                    <Modal
                    isOpen={this.props.Open}
                    onRequestClose={this.CloseModal}
                    className={"Modal"}>

             <strong><h2 className={"modaltextRank"}>Tu Rango {this.props.rank}</h2></strong>
             <p className={"modaltextScore"}>Tu score {this.props.Score}</p>
            <button className={"button redder"} onClick={this.reset}> Intentar de nuevo</button>
             
             <img  className={"medal"} src = {this.props.medal}/>
             <Router history={hashHistory}>
                 <div>
                     <Link className={"Linktext"} to={'/Part2'}>Continuar</Link>
                     
                     <Route exact path='/' component={Result}/>
                         <Route exact path='/Part2' component={Part2}/>
                         
                         </div>
                 </Router>
             
             </Modal>
                </div>
        )
    }
}