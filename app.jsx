import HelloWorld from './hello-world'; // import HelloWorld component
import React from 'react';              
import ReactDOM from 'react-dom';

ReactDOM.render(        // render 
    <HelloWorld phrase="ECMAScript 2015" />,
    document.getElementById('root')
);