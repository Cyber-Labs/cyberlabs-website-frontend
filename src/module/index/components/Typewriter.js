import React,{Component} from "react";
let interval;
class Typewriter extends Component {
    constructor(props){
        super(props);
        this.state= {
            dataText : ["Hackers.", "Designers.", "Engineers.", "Problem Solvers."],
            currentWord:"CyberLabs.",
            loopCounter:0,
            onScreen:"hi",
        };
    }
    componentDidMount(){
        this.startPrinting();
    }
    componentWillUnmount(){
        clearInterval(interval);
    }
    startPrinting(){
        let loopCounter=this.state.loopCounter;
        this.setState({currentWord:this.state.dataText[loopCounter]});
        let i=0;
        let text=this.state.currentWord;
        let period=150;
        let j=text.length-1;
        interval=setInterval(()=>{
            if(i<text.length){
            this.setState({onScreen:text.substring(0,i+1)});
            i++;
            }
            else if(i===text.length && j>=-1){
              period=10;
              this.setState({onScreen:text.substring(0,j+1)});
              j--;
            }
            else{
                clearInterval(interval);
                if(this.state.loopCounter<3)
                    this.setState({loopCounter:loopCounter+1,});
                else
                    this.setState({loopCounter:0});
                this.startPrinting();
            }
        },period);
    }
    render(){
        return(
            <div>
                <h1>We are</h1>
                <h1 className="typewrite">
                    {this.state.onScreen}<span className="typed-cursor">|</span>
                </h1>
            </div>
        );
    }
}
export default Typewriter