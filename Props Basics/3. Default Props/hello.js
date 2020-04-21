class Hello extends React.Component {
    //default props
    static defaultProps = {
        to:"Abhi",
        from: "Anj",
        number: 1
    }
    render(){
        return (
            <div>
            <h1>Hello! from {this.props.to} to {this.props.from} my number is {this.props.number}</h1>
            <img src={this.props.img} height="200" />
            </div>
            )
    }
}