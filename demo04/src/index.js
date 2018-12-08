import _ from 'lodash';
import './style.css'
import Picture from './picture.jpg'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' '); //要用到lodash的语法
    element.classList.add('hello'); //给元素添加一个类名hello

    var Pic = new Image(); //新建一个图片对象
    Pic.src = Picture; //图片对象的路径设为引入进来的Picture

    element.appendChild(Pic); //把图片对象插入到上面的div对象里

    return element;
}

document.body.appendChild(component());