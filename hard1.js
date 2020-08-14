function typeOf(obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

console.log(typeOf([]));
console.log(typeOf(null));