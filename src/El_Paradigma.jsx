import React, {Component} from 'react';
import Result from './Modal/Complete.jsx';
import ResultA from './Modal/ModalTA.jsx';
//import Music from './Form.jsx'
import Sound from 'react-sound';
import Title from './Title.jsx';
import Music from './Music.jsx'
 require('./did.css')
require('./css/background.css');
require('./css/Text.css');
require('./css/button.css');
 class Objetivos extends Component{
     constructor(props){ 
     super(props);
     this.state={
         objt: "✔",
         RankPleb: "No tienes la menor idea de tu lenguaje",
         RankCasual: "Uso casual de las palabras",
         RankAware: "Sabes lo que dices",
         RankMaster: "Conoces perfectamente tu lenguaje"
     }
    }
     render(){
         let done= "";
         if(this.props.Word3 == 'recela'){
            done  =  !this.props.flip && (<p className={"checked"}>{this.state.objt}</p>)
         }
         return(
             <div className={"objetivos"}>
                 
                <strong><h3 className={"Letterobj"}>OBJETIVOS</h3></strong>
                  <ul>
                    <li>
                    <p>La palabra mas rara de temiendole {done}</p>
                    </li>
                  </ul>
                  <div>
                      <p>{this.props.Warn} de 3 intentos</p> 
                       <strong> <p>Tips</p></strong>
                       <span></span>
                     </div>
                     score: {this.props.Score}
             </div>
         )
     }
 }
export default class Page1 extends Component{
    constructor(props){
        super(props);
        this.state={
            Resp1: "",
            placeH: "mirando",
            placeH2: "dando",
            placeH3: "temiendole",
            placeH4: "trataban",
            placeH5: "queria",
            placeH6: "movia",
            placeH7: "tope",
            placeH8: "miraba",
            placeH9: "ponia",
            placeH10: "veia",
            placeH11: "estamos",
            Resp2: '',
            Resp3: '',
            Resp4: '',
            Resp5: '',
            Resp6: '',
            Resp7: '',
            Resp8: '',
            Resp9: '',
            Resp10: '',
            Resp11: '',
            LockIn1: true,
            LockIn2: true,
            LockIn3: true,
            LockIn4: true,
            LockIn5: true,
            LockIn6: true,
            LockIn7: true,
            LockIn8: true,
            LockIn9: true,
            LockIn10: true,
            LockIn11: true,
            LockIn12: true,
            Score: 0,
            isLoading: true,
            Open: false,
            plays: Sound.status.PLAYING,
            Warning: 0,
            gameOver:true,
            TA: false,
        }
        this.Reset = this.Reset.bind(this);
        this.play = this.play.bind(this);
    }
    componentWillMount(){
       localStorage.getItem("Resp1","Resp2","Resp3","Resp4","Resp5","Resp6","Resp7","Resp8","Resp9","Resp10","Resp11") && this.setState({ 
           Resp1: JSON.parse(localStorage.getItem("Resp1")),
           Resp2: JSON.parse(localStorage.getItem("Resp2")),
           Resp3: JSON.parse(localStorage.getItem("Resp3")),
           Resp4: JSON.parse(localStorage.getItem("Resp4")),
           Resp5: JSON.parse(localStorage.getItem("Resp5")),
           Resp6: JSON.parse(localStorage.getItem("Resp6")),
           Resp7: JSON.parse(localStorage.getItem("Resp7")),
           Resp8: JSON.parse(localStorage.getItem("Resp8")),
           Resp9: JSON.parse(localStorage.getItem("Resp9")),
           Resp10: JSON.parse(localStorage.getItem("Resp10")),
           Resp11: JSON.parse(localStorage.getItem("Resp11")),
           
           isLoading: false
       })
    }
    componentDidMount(){
        if(!localStorage.getItem("Resp1","Resp2","Resp3","Resp4","Resp5","Resp6","Resp7","Resp8","Resp9","Resp10","Resp11")){
            this.Input();
        }else{
          console.log("data");
        }
        
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem("Resp1", JSON.stringify(nextState.Resp1));
        localStorage.setItem("Resp2", JSON.stringify(nextState.Resp2));
        localStorage.setItem("Resp3", JSON.stringify(nextState.Resp3));
        localStorage.setItem("Resp4", JSON.stringify(nextState.Resp4));
        localStorage.setItem("Resp5", JSON.stringify(nextState.Resp5));
        localStorage.setItem("Resp6", JSON.stringify(nextState.Resp6));
        localStorage.setItem("Resp7", JSON.stringify(nextState.Resp7));
        localStorage.setItem("Resp8", JSON.stringify(nextState.Resp8));
        localStorage.setItem("Resp9", JSON.stringify(nextState.Resp9));
        localStorage.setItem("Resp10", JSON.stringify(nextState.Resp10));
        localStorage.setItem("Resp11", JSON.stringify(nextState.Resp11));
    }
    play(){
        this.setState({plays: Sound.status.STOPPED})
    }
    Reset(){
        localStorage.clear();
        console.log("pass");
        this.setState({
            rank: "",
            placeH: "mirando",
            placeH2: "dando",
            placeH3: "temiendole",
            placeH4: "trataban",
            placeH5: "queria",
            placeH6: "movia",
            placeH7: "tope",
            placeH8: "miraba",
            placeH9: "ponia",
            placeH10: "veia",
            placeH11: "estamos",
            Resp1: this.refs.Res1.value = "",
            Resp2: this.refs.Res2.value="",
            Resp3: this.refs.Res3.value="",
            Resp4: this.refs.Res4.value="",
            Resp5: this.refs.Res5.value="",
            Resp6: this.refs.Res6.value="",
            Resp7: this.refs.Res7.value="",
            Resp8: this.refs.Res8.value="",
            Resp9: this.refs.Res9.value="",
            Resp10: this.refs.Res10.value="",
            Resp11: this.refs.Res11.value="",
            LockIn1: true,
            LockIn2: true,
            LockIn3: true,
            LockIn4: true,
            LockIn5: true,
            LockIn6: true,
            LockIn7: true,
            LockIn8: true,
            LockIn9: true,
            LockIn10: true,
            LockIn11: true,

            Resp1: "",Resp2: "",Resp3: "",Resp4: "",Resp5: "",Resp6: "",
            Resp7: "",
            Resp8: "",
            Resp9: "",
            Resp10: "",
            Resp11: "",
            Score: 0,
            medal: "",
            gameOver:true,
            Warning: 0
        })
    }
    Input(){
        this.setState({
            Resp1: this.refs.Res1.value,
            Resp2: this.refs.Res2.value,
            Resp3: this.refs.Res3.value,
            Resp4: this.refs.Res4.value,
            Resp5: this.refs.Res5.value,
            Resp6: this.refs.Res6.value,
            Resp7: this.refs.Res7.value,
            Resp8: this.refs.Res8.value,
            Resp9: this.refs.Res9.value,
            Resp10: this.refs.Res10.value,
            Resp11: this.refs.Res11.value,
        })
    }
    render(){
        let ScorePoints = 0;
        let WarnPoint= 0;
        let medal = "";
        
            if(this.state.Resp1 == "volteo"){
                ScorePoints = 5 + ScorePoints;
                {this.state.LockIn1 =false}
                {this.state.placeH = "volteo"}

                this.state.Score = ScorePoints;
                console.log("paso")
            }
                            if(this.state.Resp1 == "mira"){
                                 
                                WarnPoint = 1 + WarnPoint;
                                {this.state.LockIn1 = false}
                                {this.state.placeH = "mira"}
                                this.state.Warning = WarnPoint;
                         //       alert("Strike!!! Warn points " + this.state.Warning)

                            }
            if(this.state.Resp1 == "mirando"){
                ScorePoints = 1 + ScorePoints;
                {this.state.LockIn1 =false}
                {this.state.placeH = "mirando"}

                this.state.Score = ScorePoints;
            }
            if(this.state.Resp1 == "oteo"){
                ScorePoints = 20 + ScorePoints;
                {this.state.LockIn1 =false}
                {this.state.placeH = "oteo"}
                this.state.Score = ScorePoints;
            }
            

            if(this.state.Resp2 == "dan"){
                {this.state.placeH2 = "dan"}
                ScorePoints = 10 + ScorePoints;
                {this.state.LockIn2 = false}
                this.state.Score = ScorePoints;
            }
            if(this.state.Resp3 == "temor"){
                {this.state.placeH3 = "temor"}
                ScorePoints = 10 + ScorePoints;
                {this.state.LockIn3 = false}
                this.state.Score = ScorePoints;
            }
                    if(this.state.Resp3 == "recela"){
                        {this.state.placeH3 = "recelar"}
                        ScorePoints = 20 + ScorePoints;
                        {this.state.LockIn3 = false}
                        this.state.Score = ScorePoints;
                    }
                    if(this.state.Resp3 == "temiendole"){
                        {this.state.placeH3 = "temiendole"}
                        ScorePoints = 1 + ScorePoints;
                        {this.state.LockIn3 = false}
                        this.state.Score = ScorePoints;
                    }
                    if(this.state.Resp3 == "gallina"){
                        {this.state.placeH3 = "gallina"}
                        WarnPoint = 1 + WarnPoint;
                        {this.state.LockIn3 = false}
                        this.state.Warning = WarnPoint;
                    }
            
            if(this.state.Resp4 == "trataron"){
                {this.state.placeH4 = "trataron"}
                ScorePoints = 10 + ScorePoints;
                {this.state.LockIn4 = false}
                this.state.Score = ScorePoints;

            }
                        if(this.state.Resp4 == "quisieron"){
                            {this.state.placeH4 = "quisieron"}
                            ScorePoints = 1 + ScorePoints;
                            {this.state.LockIn4 = false}
                            this.state.Score = ScorePoints;
                        }
                        if(this.state.Resp4 == "intentaron"){
                            {this.state.placeH4 = "intentaron"}
                            ScorePoints = 15 + ScorePoints;
                            {this.state.LockIn4 = false}
                            this.state.Score = ScorePoints;
                        }
                        if(this.state.Resp4 == "trato"){
                            {this.state.placeH4 = "trato"}
                            WarnPoint = 1 + WarnPoint;
                            {this.state.LockIn4 = false}
                            this.state.Warning = WarnPoint;
                        }


            if(this.state.Resp5 == "quiso"){
                {this.state.placeH5 = "quiso"}
                ScorePoints = 10 + ScorePoints;
                {this.state.LockIn5 = false}
                this.state.Score = ScorePoints;
            }
                    if(this.state.Resp5 == "queria"){
                        {this.state.placeH5 = "queria"}
                        ScorePoints = 1 + ScorePoints;
                        {this.state.LockIn5 = false}
                        this.state.Score = ScorePoints;
                    }
                    if(this.state.Resp5 == "quiere"){
                        {this.state.placeH5 = "quiere"}
                        WarnPoint = 1 + WarnPoint;
                        {this.state.LockIn5 = false}
                        this.state.Warning = WarnPoint;
                    }

            if(this.state.Resp6 == "movio"){
                {this.state.placeH6 = "movio"}
                ScorePoints = 10 + ScorePoints;
                {this.state.LockIn6 = false}
                this.state.Score = ScorePoints;
            }
                if(this.state.Resp6 == "meneo"){
                    {this.state.placeH6 = "meneo"}
                    ScorePoints = 20 + ScorePoints;
                    {this.state.LockIn6 = false}
                    this.state.Score = ScorePoints;
                }
                            if(this.state.Resp6 == "giro"){
                                {this.state.placeH6 = "meneo"}
                                ScorePoints = 7 + ScorePoints;
                                {this.state.LockIn6 = false}
                                this.state.Score = ScorePoints;
                            }
                            if(this.state.Resp6 == "agito"){ 
                            {this.state.placeH6 = "agito"}
                            ScorePoints = 1 + ScorePoints;
                            {this.state.LockIn6 = false}
                            this.state.Score = ScorePoints;
                            }
                            if(this.state.Resp6 == "movio"){
                                {this.state.placeH6 = "movio"}
                                ScorePoints = 1 + ScorePoints;
                                {this.state.LockIn6 = false}
                                this.state.Score = ScorePoints;
                            }
                        
            if(this.state.Resp7 == "cima"){//indicador de super palabra
                {this.state.placeH7 = "cima"}
                ScorePoints = 5 + ScorePoints;
                {this.state.LockIn7 = false}
                this.state.Score = ScorePoints;
            }
                        if(this.state.Resp7 == "tope"){//indicador de super palabra
                            {this.state.placeH7 = "tope"}
                            ScorePoints = 1 + ScorePoints;
                            {this.state.LockIn7 = false}
                            this.state.Score = ScorePoints;
                        }
                        if(this.state.Resp7 == "pico"){//indicador de super palabra
                            {this.state.placeH7 = "pico"}
                            WarnPoint = 1 + WarnPoint;
                            {this.state.LockIn7 = false}
                            this.state.Warning = WarnPoint;
                        }
                        if(this.state.Resp7 == "cumbre"){//indicador de super palabra
                            {this.state.placeH7 = "cumbre"}
                            ScorePoints = 3 + ScorePoints;
                            {this.state.LockIn7 = false}
                            this.state.Score = ScorePoints;
                        }

            if(this.state.Resp8 == "miro")
            {
                {this.state.placeH8 == "miro"}
                ScorePoints = 5 + ScorePoints;
                {this.state.LockIn8 = false}
                this.state.Score = ScorePoints;
            }
                            if(this.state.Resp8 == "mira")
                            {
                                {this.state.placeH8 == "mira"}
                                ScorePoints = 3 + ScorePoints;
                                {this.state.LockIn8 = false}
                                this.state.Score = ScorePoints;
                            }
                            if(this.state.Resp8 == "volteo")
                            {
                                {this.state.placeH8 == "volteo"}
                                WarnPoint = 1 + WarnPoint;
                                {this.state.LockIn8 = false}
                                this.state.Warning = WarnPoint;
                            }
                            if(this.state.Resp8 == "visualiza")
                            {
                                {this.state.placeH8 == "visualiza"}
                                ScorePoints = 2 + ScorePoints;
                                {this.state.LockIn8 = false}
                                this.state.Score = ScorePoints;
                            }

            if(this.state.Resp9 == "hacia"){
                {this.state.placeH9 = "hacia"}
                ScorePoints = 5 + ScorePoints;
                {this.state.LockIn9 = false}
                this.state.Score = ScorePoints;
            }
                    if(this.state.Resp9 == "hiso"){
                        {this.state.placeH9 = "hiso"}
                        WarnPoint = 1 + WarnPoint;
                        {this.state.LockIn9 = false}
                        this.state.Warning = WarnPoint;
                    }
                


            if(this.state.Resp10 == "vio"){
                {this.state.placeH10 = "vio"}
                ScorePoints = 5 + ScorePoints;
                {this.state.LockIn10 = false}
                this.state.Score = ScorePoints;
            }



            if(this.state.Resp11 == "tenemos"){
                {this.state.placeH11 = "tenemos"}
                ScorePoints = 5 + ScorePoints;
                {this.state.LockIn11 = false}
                this.state.Score = ScorePoints;
            }
                    if(this.state.Resp11 == "podemos"){
                        {this.state.placeH11 = "podemos"}
                        ScorePoints = 7 + ScorePoints;
                        {this.state.LockIn11 = false}
                        this.state.Score = ScorePoints;
                    }
                    if(this.state.Resp11 == "queremos"){
                        {this.state.placeH11 = "queremos"}
                        WarnPoint = 1 + WarnPoint;
                        {this.state.LockIn11 = false}
                        this.state.Warning = WarnPoint;
                    }

            if((this.state.Resp1 == "mirando" || this.state.Resp1=="oteo" || this.state.Resp1=="volteo") && this.state.Resp2 == "dan" && (this.state.Resp3 ==  "temor" || this.state.Resp3=="recela" || this.state.Resp3=="temiendole") && (this.state.Resp4 == "trataron" || this.state.Resp4=="intentaron" || this.state.Resp4 =="quisieron") &&  (this.state.Resp5 == "quiso" || this.state.Resp5=="queria") && (this.state.Resp6 == "movio" || this.state.Resp6=="meneo" || this.state.Resp6=="agito" || this.state.Resp6=="giro") && this.state.Resp7 == "cima" && (this.state.Resp8 == "miro"  || this.state.Resp8=="visualiza")&& this.state.Resp9 == "hacia" &&
            this.state.Resp10 == "vio" && (this.state.Resp11 == "tenemos" || this.state.Resp11 == "podemos")
        ){
                     
        if(this.state.Score <= 30){
          console.log("completo");  
             {this.state.medal="./src/img/Pleb.gif"}
             {this.state.rank="Pleb"}
             {this.state.TA = true}
             
         }
         else if(this.state.Score <= 60){
            {this.state.medal="./src/img/Casual.gif"}
             {this.state.rank="Casual"}
             {this.state.TA = true}
         }
          else if(this.state.Score <= 80){
              console.log("paso por aware")
            {this.state.medal="./src/img/Aware.png"}
             {this.state.rank="Aware"}
             {this.state.Open = true}
         }
         else if(this.state.Score <= 200){
             {this.state.medal="./src/img/Master.png"}
            {this.state.rank = "Master"}
            {this.state.Open = true}
           console.log("paso nuevo dato");
         }
         
            }
         if(this.state.Warning == 3){
             {this.state.gameOver = false}
         }


        return(


            
               <div className={"Mbackground"}>
               <Title/>
            <div className = {"background"} >
                  
               <p className={"Letter"}>
               <h2>Capitulo II</h2><br/>
            …Clava su espada a la roca, para poder escalar la montana; <input id="Res1" maxLength={15} className={"input2"} disabled={!this.state.LockIn1} ref = "Res1" placeholder={this.state.placeH} style={{width:"50px"}}/> hacia arriba ve aves <input maxLength={15} className={"input2"} disabled={!this.state.LockIn2} ref="Res2" placeholder={this.state.placeH2} style={{width:"50px"}}/><br/>
                 vueltas en círculos. Slayer <input maxLength={15} ref="Res3" className={"input2"} disabled={!this.state.LockIn3} placeholder={this.state.placeH3} style={{width:"70px"}}/> al peligro... sube.<br/>
                
                <br/>

                En su camino las aves <input maxLength={15} className={"input2"} disabled={!this.state.LockIn4} ref="Res4" placeholder = {this.state.placeH4} style={{width:"50px"}}/> de atacarlo, no <input maxLength={15} className={"input2"} disabled={!this.state.LockIn5} ref="Res5" placeholder={this.state.placeH5} style={{width:"40px"}}/> hacerles daño <input maxLength={15} className={"input2"} disabled={!this.state.LockIn6} ref="Res6" placeholder={this.state.placeH6} style={{width:"40px"}}/> su mano para alejarlos <br/>
                y escalaba rápidamente. Al llegar a la <input maxLength={15} className={"input2"} disabled={!this.state.LockIn7} ref="Res7" placeholder={this.state.placeH7} style={{width:"30px"}}/> hay una cueva enorme se podía sentir el eco fuerte; <br/>
                inspeccionaba la entrada, <input maxLength={15} className={"input2"} disabled={!this.state.LockIn8} ref = "Res8" placeholder={this.state.placeH8} style={{width:"40px"}}/> huellas de humano que iba a lo mas profundo, Slayer entro <br/>
                corriendo. <br/>
                <br/>

                Al inicio era un camino largo y ancho con muy poca iluminación. Entre mas avanzaba el camino se <br/>
                <input maxLength={15} className={"input2"} ref = "Res9" placeholder={this.state.placeH9} style={{width:"35px"}} disabled={!this.state.LockIn9} /> mas angosto hasta que llego a un cuarto circular; había varios túneles alrededor del área. Se <br/>
                quedo pensando donde podía ir. De repente escucho disparos y gritos. Slayer no sabia de donde <br/>
                pudo salir el ruido por pánico corrió a un túnel al azar.<br/>
                <br/>
                Era otra caminata larga que parecía no tener fin, entre mas corría sentía mas calor; hasta que vio <br/>
                iluminación roja ¿podía ser una salida de la cueva? Se pregunto Slayer mientras caminaba con <br/>
                precaución. ¡No!, era un pozo de lava por sorpresa. Se sentía el calor intenso; su cuerpo dónde <br/>
                colgaba su espada empezaba a arder. <input maxLength={15} className={"input2"} ref= "Res10"  disabled={!this.state.LockIn10} placeholder={this.state.placeH10} style={{width:"25px"}}/> que era un camino sin salida, decidió regresarse. Antes <br/>
                de llegar al cuarto circular oyó unas voces se detuvo, se pegó contra la pared para acercarse mas y <br/>
                escuchar:<br/>
                <br/>
                —¿No lo han encontrado?   <br/>
                —Aun no, pero creímos escuchar unos llantos en unas de las entradas.<br/>
                —Solo hay que recordar que, si encontramos al objetivo no <input maxLength={15} className={"input2"} disabled={!this.state.LockIn11} ref= "Res11" placeholder={this.state.placeH11} style={{width:"50px"}}/> permitido dispararle o hacerle <br/>
                daño<br/>
                —¿Qué pasa si trata de atacarnos? Ese niño tiene una arma sabes<br/>
                —Solo somételo… él no va a tratarte de hacerte daño.<br/>
                <br/>
                Las voces se dejaron de oír. Slayer salió del escondite ¿no sabía si estaban hablando del niño <br/>
                perdido? Pero eso no importaba decidió tomar otra ruta. De nuevo era otro pasillo sin fin, la <br/>
                oscuridad era más densa no se podía ver nada, pero presencio algo y se detuvo; escucho un ruido <br/>
                haciendo “click”, vio electricidad y a lo lejos alguien grito:<br/>
                <br/>
                —¡Demonios!, no alcanzo la descarga eléctrica.<br/>
                Al darse cuenta del ataque corrió de regreso; se escuchaba como la otra persona empezó <br/>
                perseguirlo y hablando:<br/>
                <br/>
                —¡No te me escaparas!<br/>
                Slayer miro hacia atrás pero no podía ver nada, de repente sintió un dolor en la pierna; callo al <br/>
                suelo vio que era lo que le causo la lesión, parecía ser una posta.<br/>
                <br/>
                —No te preocupes no fue una bala de verdad, no penetro tu cuerpo—dijo la persona encendió una <br/>
                lámpara y se estaba acercando revelando su apariencia:<br/>
                <br/>
                Usaba un uniforme negro, en el pecho tenia protector antibalas su cinturón contenia toda clase de <br/>
                herramientas: linterna, granada, radio, pistola, no se podia identificar su rostro por que tenia una <br/>
                máscara protectora de gas, junto con un casco y lentes oscuros modificados. <br/>
                <br/>
               
              
                <button disabled={!this.state.gameOver} className={"button turquoise"} onClick={(e)=>{this.Input()}} > Siguiente pagina</button>
                  
                <button className={"button red"} onClick={(e)=>{this.Reset()}}>Reset</button>
                </p>
                
                <Result  Open ={this.state.Open} Score={this.state.Score} rank={this.state.rank} medal={this.state.medal}/>
                <ResultA Open = {this.state.TA} Score={this.state.Score} rank={this.state.rank} medal={this.state.medal}/>

                <Objetivos Warn={this.state.Warning} Score={this.state.Score} Word3={this.state.Resp3} flip={this.state.LockIn3}/>
                <Sound
      url="./src/Music/Bejeweled 3.mp3"
      playStatus={Sound.status.PLAYING}
      volume={1}
      
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
 

 



                </div>
                </div>
                
        )
    }
}

