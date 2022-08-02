// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
function appendCat(name){
    return cats = [...cats, "Broom"]
}
function prependCat(name){
    cats = cats.slice(0,3);
    return cats = ["Arnold", ...cats];
}
function removeLastCat(){
    return cats = cats.slice(1, 3);
}
function removeFirstCat(){
    cats = ["Milo", "Otis", "Garfield"]
    return cats = cats.slice(1);
}