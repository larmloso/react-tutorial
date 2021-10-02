
const Welcome = (props) => {
    if (!props.name) {
        return "hello ..."
    } else {
        return <h1> Hello, {props.name}</h1>
    }
    
}

function ComponentsAndProps() {
    return (
        <div>
            <h1> Hello component and props</h1>
            <Welcome name="larm"/>
        </div>
    );
}

export default ComponentsAndProps;

