import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button'); //新建一个button对象

    element.innerHTML = _.join(['Hello', 'webpack'], ' '); //要用到lodash的语法

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe; //button触发的事件是引用的print.js暴露的事件

    element.appendChild(btn); //把button对象插入div中

    return element;
}

document.body.appendChild(component());