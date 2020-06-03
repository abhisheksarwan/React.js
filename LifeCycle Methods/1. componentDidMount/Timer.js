 /* contructor => render => react updates DOM and ref => componentDidMount (good place for ajax) */

 class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {time : new Date() };
        console.log("In Constructor!");
}

componentDidMount(){
    console.log("In CDM");
    this.timerID = setInterval(()=>{
        this.setState({time: new Date()})
    }, 1000);
}


        render(){
            console.log("In Render!");
            return (
            <h1>{this.state.time.getSeconds()}</h1>
            )
       
    }
}
