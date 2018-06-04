import React from 'react';
import ReactDOM from 'react-dom'



//log 1 Day 1 
//este es un repaso rapido para ver como funciona
//react este nuevo editor de codigo e repasando lo que he visto
//durante el esta secion lo que haremos horita sera probar lo que es los states y los props

// const BunchWors= () =>
// {
//    return(
//      <div>
//       <p>hello is a component</p>
//        </div>
//    )
// }
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>hello this is a words</h1>
//         <p> this ir apparently a parragraft</p>
//         <li>
//            a list
                        
//           </li>
//           <BunchWors/>
//         </div>
//     )
//   }
// }


//day 2 log 2
//trabajando en un nuevo proyecto sobre,
//un demostracion de un juego... la primera parte sera el diseno de una
//pagina web en html

//day 3 log 3
//despues de trabajar un poco con elementos estaticos y unos de cambios
//ahora le vamos agregar lo que sera, una seccion de comentario
//el objetivo es sencillo para realizar para la primera parte
//hacer que todo lo que escriba en un textbox me lo valide y lo despliegue

class ListaComentarios extends React.Component{
  constructor(props){
    super(props)
    this.createTask = this.createTask.bind(this);
  }
  createTask(item){
    return <li key={item.key}>{item.text}</li>
  }
  render(){
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTask);
   return(
     <ul >
       {listItems}
       </ul>
   );
  }
}

class Coments extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comments : []
    }
    this.textcoment = this.textcoment.bind(this);
  }

  textcoment(e)
  {
    if(this._inputElement.value !== ""){
      let newitem = {
        text: this._inputElement.value,
        key: Date.now()
      };
    
    this.setState((prevstate)=>{
      if(this.state.comments == "")
      {
         
         alert("Por favor ingrese un comentario")
        
        
      }
      else
      { 
      return{
        comments : prevstate.comments.concat(newitem)
     };
    }
    
    });
  }
  console.log(this.state.comments);
  this._inputElement.value = "";
  e.preventDefault();
  
  }

  render(){
    return(
      <div>
        <form onSubmit={this.textcoment}>
         <textarea rows = "4" cols = "50" ref={(a)=> this._inputElement = a} placeholder = "Comenta"></textarea> 
          <button onClick= {this.textcoment} style ={{ height: 50, marginTop: 5 }} disabled={!this.state.comments}> OK </button>
          
          
          <h4>Comentarios</h4>
          <ListaComentarios entries = {this.state.comments}/>
          </form>
        </div>  
    )
  }
}

const Capitulos = (props) =>{
  return(
    <div>
    <center> <h1>Capitulo {props.ChapterNumber}</h1> </center>
    <center> <h4>{props.ChapterName}</h4> </center>
       </div>
  )
}

class Template extends React.Component{
  constructor(props){
    super(props);
    this.state={ 
       DescriptionCapitulo:[{Descr:"Will Brandford escritor de novelas"},
      {Descr:"Slayer enfrenta al equipo swat"}
      ] ,
       Mostrar: false  
    }
    this.Listacapitulo = this.Listacapitulo.bind(this);
   
  }
  componentDidMount(){
    console.log("did mount");
  }
  componentDidUpdate(){
    console.log("Updated")
  }
  componentWillUnmount(){

  }
  Listacapitulo(){
    console.log("esto funciona");
        this.setState((prevstate)=>{
       
            return{
            
            Mostrar: !this.state.Mostrar
            }
       
          
        });
  }
  render(){
  
    return(
      <div>
      <Capitulos ChapterNumber = {1} ChapterName= {"El Comienzo de la Fantasia"}/>
      <button onClick = {this.Listacapitulo}>{this.state.Mostrar ? 'Esconder info': 'Mostrar info'}</button>
       {this.state.Mostrar &&(<p>Will Brandford escritor de novelas para ninos, su destino comienza al realizar un nuevo proyecto</p>)}
      <hr/>
      <Capitulos ChapterNumber = {2} ChapterName= {"Una Fantasia Final"}/>
      <hr/>
      <Capitulos ChapterNumber = {3} ChapterName= {"La Otra Fantasia"}/> 
      
      <div>
         <hr/>
         <Coments/>
         
      </div>
      </div>
    )
  }
}
class App extends React.Component{


  render(){
    return(
      <Template/>
    )
  }
}


// class OperationApp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       resultado : 0,
//       number1: "",
//       lista : []
//     }
//     // this.Suma = this.Suma.bind(this);
//     this.agregar = this.agregar.bind(this);
//     this.handdle = this.handdle.bind(this);
//   }

  
//   agregar(){
//     this.setState({
//          number1 : this.refs.num1.value
//     });
//   }
//   handdle(){
    
//       this.state.lista.push(this.state.number1)
    
//     console.log(this.state.lista);
    
//   }
//   render(){
//     console.log(this.state.resultado);
  
//     return(
//       <div>
    
//             <input ref = "num1" type = "value"/>
//               <button onClick= {this.handdle}>Suma</button>
             
          
//           {/* {this.state.resultado} */}
//          {this.state.lista}
//         </div>
//     )
//   }
// }
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <OperationApp/>
//         </div>
//     )
//   }
// }

// class TodoItems extends React.Component {
//   constructor(props){
//         super(props);
       
//       }
//   createTask(item) {
//     return <li key={item.key}>{item.text}</li>
//   }
 
//   render() {
//     var todoEntries = this.props.entries;
//     var listItems = todoEntries.map(this.createTask);
 
//     return (
//       <ul>
//           {listItems}
//       </ul>
//     );
//   }
// };


// class Lista extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       name: 'Todo list app',
//         task: []  
       
//     }
//     this.Agregartask = this.Agregartask.bind(this);
//     this.Deletetask = this.Deletetask.bind(this);
  
//   };


//   Agregartask(e){
//     if(this._inputElement.value !== "")//sin no hay texto o letras en el textbox no se va a agregar
//     { 
//     var newItem = {
//       text: this._inputElement.value, //reduciendo el codigo en vez de declarar o hacer otra funcion mas en el state para que el codigo detecte
//       //el texto que queremos agregar en nuestro arreglo estamos esta vez de directo agregando lo de aqui
//      key: Date.now() 
//     }
//    };
//     this.setState((prevState)=>{
//       return{
//             task: prevState.task.concat(newItem) //utilizando otro codigo aqui deposita el texto introducido a arreglo
//       }  
//     });
//     this._inputElement.value = "";
//     e.preventDefault();
//     console.log(this.state.task);
//   };

 
//   Deletetask(){
//     this.setState({

//     });
//   }
  
//   render(){
  
//     return(
//       <div>
//         <form onSubmit = {this.Agregartask}>
//          <TodoItems entries={this.state.task}/>
//          <h1>{this.state.name}</h1>
//            <input ref={(a)=>this._inputElement = a}/>
//          <h5>Agregar Task<button>Agregar</button></h5>
//          <button >Eliminar</button>
//          </form>
//         </div>
//     )
//   }
// }
// class App extends React.Component{
//   render(){
//     return(
//       <Lista/>
//     )
//   }
// }


//----

// class UserInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       userText: '',
//       list: []
//     }
//     this.deleteApp = this.deleteApp.bind(this);
//   }
//   deleteApp(){
//     this.setState({
//       list : []
//     })
//   }
//   changeuserInput(input){
   
//     this.setState((prevstate)=>{
      
//       return{ 
//       userText: input
//       }
//     });
    
//   }
//   addToList(input){
//     let listArray = this.state.list;
//  if(this.state.list.indexOf(input)>-1){
//    return alert("Ya se ingreso el a la lista "+input)
//  }
//     listArray.push(input);
//     alert("Se ingreso "+ input)
    
//     this.setState({
//       list: listArray
//     })
//       this.state.userText = ""
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <input onChange = {(e)=>this.changeuserInput(e.target.value)} value={this.state.userText}/>
//         <button onClick= {()=> this.addToList(this.state.userText)}disabled={!this.state.userText}>press me</button>
//         <button onClick onClick={this.deleteApp}>Delete</button>
//         <ul>
//           {this.state.list.map((val)=><li key={val}>{val}<button>delete</button></li>)}
//           </ul>
//         </div>
//     )
//   }
// }
// const Header = () => {
//   return(
//     <div>
//       <h1>Todo List</h1>
//     </div>
//   )
// }

// const App2 = () => {
//     return( 
//     <div>
//         <Header/>
//         <UserInput/>
//         </div>
//     )
// }


//practicas 1 stateless cambiar lista
//practica 2 stateless
//pratica 3 stateless
//practica 4 mount unmount
//practica 5 local storage



export default App;
