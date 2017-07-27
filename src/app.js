import _  from 'lodash';

function hello() {
    var el = document.createElement('div');
    el.innerHTML = _.join(['Hello','webpack'],' ');
    return el;
}
document.body.append(hello());
