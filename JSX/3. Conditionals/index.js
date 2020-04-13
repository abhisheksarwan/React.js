function getNumber(){
  return(Math.floor(Math.random()*10))
}

class JSXDemo extends React.Component{
    render(){
        const num = getNumber();
        return(
            <div>
                <h1> Number is {num} </h1>
                <p> {num === 7 ? "Congrats!" : "Better Luck Next Time!"} </p>
                {
                    num === 7 
                    ?<img src="https://images.unsplash.com/photo-1586773283634-dcce739acc38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    :null
                }
            </div>
            
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"));