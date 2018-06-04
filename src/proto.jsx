import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now'
import Modal from 'react-modal';
import {BrowserRouter, Route} from 'react-router-dom';
//import Modal from './Modal'
class Nextext extends React.Component{
    render(){
        return(
            <Modal>

                </Modal>
        )
    }
}

class Text extends React.Component{
    constructor(props){
        super(props);
        this.state={
         Answers: ["A","B"],
         Userinput: "",
         Userinput2: "",
         change: true,
         change1: true,
         Answer1: "A",
         score:0,
         isopen: false
        }
    this.OpenModal = this.OpenModal.bind(this);
    }
    OpenModal(){
        this.setState({isopen: false});
    }
       Input(){
        this.setState(    {Userinput: this.refs.A.value,Userinput2: this.refs.B.value})
    //      if(this.state.Userinput == "b"){ 
    //          console.log("paso por el primer textbox")
    //         // alert("No es correcto la Respuesta "+ this.state.Userinput)
    //          this.setState({change: !this.state.change})
    //      }
    // if(this.state.Userinput2 == "a"){
    //       this.setState({change: !this.state.change1})
    //       //alert("No es correcto la respuesta "+ this.state.Userinput2)
    //     console.log("Paso por el segundo textbox");
    // }
    // if(this.state.Userinput == "" || this.state.Userinput2 == ""){
    //     console.log("No se ingreso ");
    // }
    // else if(this.state.Userinput == 'b' && this.state.Userinput2 == 'a'){
    //     console.log("paso por todos");
    // }
   
}
    render(){
        
        let scorepoints = 0;
        let blockinput1 = true,blockinput2 = true;
        if(this.state.Userinput == "A"){ 
                     console.log("paso por el primer textbox")
                    // alert("No es correcto la Respuesta "+ this.state.Userinput)
                   // blockinput1 = false
                   {this.state.change = false}
                 //  scorepoints = 10
                  // {this.state.score = scorepoints + this.state.score}
                   scorepoints = scorepoints + 10;
                   {this.state.score = scorepoints}
                 }
            if(this.state.Userinput2 == "B"){
                {this.state.change1 = false}
                  
                console.log("Paso por el segundo textbox");
                scorepoints = scorepoints+5;
                {this.state.score = scorepoints}
            }
            if(this.state.Userinput == false || this.state.Userinput2 == false){
             //   alert("Esas no son las respuestas correctas intente de nuevo");
                console.log("No se ingreso ");
            }
            else if(this.state.Userinput == 'A' && this.state.Userinput2 == 'B' && this.state.score == 10){//una vez que se hayen verificado todas las respuestas pasaran a otro componente
             
                console.log("paso por todos");
            }
        console.log(this.state.Userinput,this.state.Userinput2);
       const j = "./src/img/fantasy.jpg"
        return(
           
            <div>
              
        <Modal isOpen={this.state.isopen}
        onRequestClose={false}>
          <button onClick={this.OpenModal}> open</button>
        hello
        </Modal>
        <img src={j}/>
              <select>
                  
                <option>{this.state.Answers}</option>
               </select>
               <h1> {this.state.Userinput}</h1>
               <p>
               Esta es una <input disabled={!this.state.change} ref= "A" style = {{width: "60px"}} placeholder = {"Horacion"} /> normal que se tiene que 
               <input disabled= {!this.state.change1} ref= "B" style = {{width: "60px"}} placeholder={"Competar"} />
                   </p>
                      {this.state.score}
                   <button onClick={(e)=>{this.Input()}}>Presionar</button>
                  <List  score={this.state.score} dato1={this.state.Answer1} Dato2={"B"} flip={this.state.change}/>
                </div>
              
        )
    }
}

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            objt: 'done',
            achvpleb: "Rara vez notas lo que estas diciendo",
            achvCasual: "Uso casual de palabras",
            achvAware: "Sabes tus palabras y sabes usarlas",
            achvMaster: "Conoces perfectamente tu idioma"
        }
    }
      Showtext(){
          this.setState({change: !this.state.change})
      }
    render(){
        
        let Done = "";
        if(this.props.dato1 == "A"){
            console.log("mision cumplida")
            Done= <p>Cumplida</p>
         Done  =  !this.props.flip && (<div><p>{this.state.objt}</p></div>)

        }
        if(this.props.Dato2 == "B"){
            console.log("Otra mision cumplida")
        }
        if(this.props.dato1 == "A" && this.props.Dato2 == "B"){
            console.log("este es tu score")
            if(this.props.score == 15){
                 alert(this.state.achvCasual)
            }
        }

        // //---  codigo de rankeo
        //  if(this.props.score == 30){
        //      {this.state.RankPleb}
        //  }
        //  if(this.props.score == 50){
        //      {this.state.RankCasual}
        //  }
        //  if(this.props.score == 80){
        //      {this.state.RankAware}
        //  }
        //  if(this.props.score == 100){
        //    {this.state.RankMaster}
        //  }

        //--

        else{ 
        Done = "No cumplida"
        }
        return(
             <div>
            <ul>
                Encontrar todos las respuestas {Done}
               
                {this.props.score}
            </ul>
                 </div>
        )
    }
}

export default Text;