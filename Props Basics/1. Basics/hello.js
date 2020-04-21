class Hello extends React.Component {
    render(){
        console.log(this.props);
        //you can also use
        // const props = this.props and then prop.to and so on
        return (
            <div>
            <h1>Hello! from {this.props.to} from {this.props.from} my number is {this.props.number}</h1>
            <img src={this.props.img} height="200" />
            </div>
            )
    }
}