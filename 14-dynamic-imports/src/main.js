document.title = 'Ze Cats';

// The "webpackChunkName" comment below is magic - it causes the bundle for showCats to be named showCats.bundle.js instead of 0.bundle.js
import(/* webpackChunkName: "showCats" */ 'showCats')
  // Destructured object parameter, renamed to "showCats".
  // What's this default thing?  https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655
  .then(({ default: showCats }) => {
    showCats();
  })
  .catch(error => 'An error occurred while loading the component');

import(/* webpackChunkName: "cats" */ 'cats')
  .then(({ default: cats }) => {
    const p = document.createElement('p');
    p.innerHTML = `There are ${cats.length} cats.`;
    document.body.append(p);
  })
  .catch(error => 'An error occurred while loading the component');

setTimeout(() => {
  import(/* webpackChunkName: "slowCat" */ 'slowCat')
  .then(({ default: slowCat }) => {
    slowCat("Horace");
  }).catch(error => 'An error occurred while loading the component');
}, 5000);
