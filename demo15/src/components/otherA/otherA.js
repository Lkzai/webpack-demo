import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './otherA.scss'
import '../../common/css/common.scss'

class App extends Component {
    render() {
        return <h1> A </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);