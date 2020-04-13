//JSX isn't legal JavaScript thats why we need Babel to convert it to legal Javascript
//Javascript Syntax Extensiom

class JSXDemo extends React.Component{
    render(){
        return(
            <div>
                <h1>JSX Demo</h1>
                <img src="https://images.unsplash.com/photo-1586773283634-dcce739acc38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
            
        )
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"));