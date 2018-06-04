import React, {Component} from 'react';
import Result from './Modal/Complete.jsx';
import Modal from 'react-modal';
require('./css/background.css');
require('./css/button.css');
require('./css/Text.css');
export default class Part2 extends Component{
    constructor(props){
        super(props);
        this.state={
        }
        this.reset = this.reset.bind(props);
    }
    reset(){
        localStorage.clear();
        window.location.reload();
    }
    render(){
        return(
            <div><Modal
            isOpen={true}
            className={"Modal"}>
               <h2 className={"part2"}>To Be Continue</h2>
               <button className={"button orange"}onClick={this.reset}>Regresar</button>
               </Modal>
                </div>
        )
    }
}