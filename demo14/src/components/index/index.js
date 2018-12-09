import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.scss'

class App extends Component {
    render() {
        return <h1> Index </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);