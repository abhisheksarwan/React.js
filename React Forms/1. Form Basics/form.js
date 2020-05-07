class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = { username: "", age:"" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state);
    }

render(){ 
        return(
            <form onSubmit={this.handleSubmit}>
            <label htlmfor="username">Username : </label>
            <input type="text"
            value={this.state.username}
            placeholder="Enter username"
            id="username"
            name="username"
            onChange={this.handleChange}  
            />

            <label htlmfor="age">Age : </label>
            <input type="text"
            value={this.state.age}
            placeholder="Enter age"
            id="age"
            name="age"
            onChange={this.handleChange} 
            />

            <button>Submit</button>
            </form>
        )
    }
}