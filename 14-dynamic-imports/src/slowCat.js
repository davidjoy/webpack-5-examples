module.exports = function slowCat(name) {
  const p = document.createElement('p');
  p.innerHTML = `${name} was really slow to arrive. 🐈`;
  document.body.append(p);
}
