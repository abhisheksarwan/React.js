 class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { users: [
            {username: "Abhishek", age: 23},
            {username: "Anshu", age: 18}
        ]};
        this.addItem = this.addItem.bind(this);
}

addItem(item){
    this.setState(st => ({
        users: [...st.users, item]
    }));
}
        render(){
        const renderlist = this.state.users.map((item, i) => <li key={i}>Name: {item.username} Age: {item.age}</li>)   
        return(
            <div>
            <h1>Names!</h1>
            <ul>
            {renderlist}
            </ul>
            <Form addItem={this.addItem} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));