import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' '); //要用到lodash的语法

    return element;
}

document.body.appendChild(component());