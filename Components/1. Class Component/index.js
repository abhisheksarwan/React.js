// A simple Class component
class ClassComponent extends React.Component{
    render(){
        return (
        <h1>This is a Class Component!</h1>
        );
    }
}

ReactDOM.render(<ClassComponent />, document.getElementById('root'));