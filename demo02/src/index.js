import _ from 'lodash';
import './style.css'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' '); //要用到lodash的语法
    element.classList.add('hello'); //给元素添加一个类名hello

    return element;
}

document.body.appendChild(component());