import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './otherB.scss'

class App extends Component {
    render() {
        return <h1> B </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);