//fetch api
const res = await fetch('http://swapi.dev/api/films/');
const data = await res.json();

console.log(data);
