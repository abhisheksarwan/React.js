class App extends React.Component {
    render(){
        return (

            <div>
            <Friend 
            name ="Paul"
            hobbies= {["Singing", "Exploring"]}
            />

            <Friend 
            name ="Duke"
            hobbies= {["Reading", "Driving"]}
            />
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));