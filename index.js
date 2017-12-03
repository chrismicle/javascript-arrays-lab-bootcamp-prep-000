const app = "I don't do much."

const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  let revisedKittens = kittens.push(name);
  return revisedKittens;
}

function prependKitten(name){
  let newKittens = kittens.unshift(name);
  return newKittens;
}
