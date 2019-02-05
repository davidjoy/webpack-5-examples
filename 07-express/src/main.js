const cats = require('./cats');

const ul = document.createElement('ul');
for(let i = 0; i < cats.length; i++) {
  const cat = document.createElement('li');
  cat.innerHTML = cats[i];
  ul.append(cat);
}
console.log('wut');
document.getElementById('cats').innerHTML = '';
document.getElementById('cats').append("My favorite cats:");
document.getElementById('cats').append(ul);

if (module.hot) {
  module.hot.accept();
}