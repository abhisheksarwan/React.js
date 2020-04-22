class Hello extends React.Component {
    render(){
        let style ={ color:"red"};
        console.log(this.props);
        //you can also use
        // const props = this.props and then prop.to and so on
        return (
            <div>
            <h1  style={style}>Hello! from {this.props.to} from {this.props.from} my number is {this.props.number}</h1>
            <img src={this.props.img} height="200" />
            </div>
            )
    }
}