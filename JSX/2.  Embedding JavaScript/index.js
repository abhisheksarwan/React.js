function getNumber(){
  return(Math.floor(Math.random()*10))
}

class JSXDemo extends React.Component{
    render(){
        return(
            <div>
                <h1>My lucky number is {getNumber()} </h1>
            </div>
            
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"));