 /* contructor => render => react updates DOM and ref => componentDidMount (good place for ajax) */

 class App extends React.Component {
    constructor(props){
        super(props);
}


        render(){
            return (
            <Timer />
            )
       
    }
}

ReactDOM.render(<App />, document.getElementById("root"));