// Write your solution here!

const cats = [];
cats.push("Milo", "Otis", "Garfield");
console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
 }

 function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
 }

 function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
 }

 function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
 }

 function appendCat(name){
    const nameAdd=[...cats,name];
    return nameAdd;
  }

  function prependCat(name){
    const nameAddBegin=[name, ...cats];
    return nameAddBegin
  }

  function removeLastCat(){
    const removeLastCat= cats.slice(0,cats.length-1);
    return removeLastCat;
  }
  
  function removeFirstCat(){
    const removeFirstCat= cats.slice(1);
    return removeFirstCat;
  }