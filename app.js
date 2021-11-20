function someFn(str) {
    if (!str) {
        return;
    }
    const arrFromStr = str.toLowerCase().split('');
    return arrFromStr[0].toUpperCase() + arrFromStr.slice(1).join('');
}

console.log(someFn('HeLlO'));

function sayHello(name) {
    const greeting = name === 'Mark' ? 'Hi' : 'Hello';
    return `${greeting}, ${name}!`;
}
console.log(sayHello("Mark"));

const array = ['hell', 'Hello Js', 'privet'];

function filterStrings(arr, length) {
  return arr.filter(x => x.length <= length);
}

console.log(filterStrings(array, 7));
