class App extends React.Component {
    constructor(){
        super();
        this.state = { num : 4, color : "Red" };
        this.switch();
        }

        switch(){
            setInterval(() => {
                let maxNum  = 7;
                let random = Math.floor(Math.random()*maxNum)
                this.setState({num : random})
                }, 1000);
        };

        render(){
        return(
            <div>
            <h1>{this.state.num}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));