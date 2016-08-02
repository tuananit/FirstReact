import React from 'react';  // import React library and put it to a variable named React

class HelloWorld extends React.Component {   // Creation of React component using ES6 class by extending React.Component
    render(){
        return <h1>Hello form {this.props.phrase} !!!!</h1>;
    }
}

export default HelloWorld;  // export created a component to outside world using export default