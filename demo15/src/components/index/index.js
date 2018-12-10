import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.scss'
import '../../common/css/common.scss' //引入公共样式

class App extends Component {
    render() {
        return <h1> Index </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);