//const cats = require('./cats');

module.exports = function showCats() {
  import(/* webpackChunkName: "cats" */ 'cats')
    .then(({ default: cats }) => {
      document.body.append('My most favorite cats:');

      const ul = document.createElement('ul');
      for (let i = 0; i < cats.length; i++) {
        const cat = document.createElement('li');
        cat.innerHTML = cats[i];
        ul.append(cat);
      }

      document.body.append(ul);
    })
    .catch(error => 'An error occurred while loading the component');
};
