import _ from 'lodash';
import printMe from './print.js';
import './style.css'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button'); //新建一个button对象

    element.innerHTML = _.join(['Hello', 'webpack'], ' '); //要用到lodash的语法

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe; //button触发的事件是引用的print.js暴露的事件

    element.appendChild(btn); //把button对象插入div中

    return element;
}

var element = component(); //改用一个element保存一下
document.body.appendChild(element);

if (module.hot) { //告诉 webpack 接受热替换的模块
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element); //删掉旧的element
        element = component(); //获得一个修改后的element
        document.body.appendChild(element); //重新插入到网页中
    })
}