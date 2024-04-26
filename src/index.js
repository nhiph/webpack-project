import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World!';
  return element;
}
console.log('test rename file after build into main.js, and vendor not rename file name because it cache third party in node modules');
document.body.appendChild(component());