 /* contructor => render => react updates DOM and ref => componentDidMount (good place for ajax) */ 

class ZenQuote extends React.Component {
    constructor(props){
        super(props);
        this.state = { quote : ""};
}

componentDidMount(){
   axios.get("https://api.github.com/zen").then(res => {
       this.setState({quote: res.data});
});
}


        render(){
            return (
            <h1>{this.state.quote}</h1>
            )
       
    }
}
