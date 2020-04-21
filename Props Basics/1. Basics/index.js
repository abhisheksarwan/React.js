class App extends React.Component {
    render(){
        return (
            <div>

            <Hello to="Anjali" 
            from="Abhishek" 
            number={3} 
            isFunny={true} 
            img="http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg"/>

            <Hello to="Dheeraj" 
            from="Suman" 
            number={10} 
            isFunny={true} 
            img="http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg"/>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));