class App extends React.Component {
    render(){
        return (
            <div>

            <Hello to="Anjali" 
            from="Abhishek" 
            number={3} 
            isFunny={true} 
            img="http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg"/>

            <Hello />

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));