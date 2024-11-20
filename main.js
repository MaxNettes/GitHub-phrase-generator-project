const nounArray = ['earth', 'world', 'card', 'boat', 'sun', 'moon', 'car'];

const artclArray = ['a', 'an', 'the'];

// if you are seeing this on GitHub idk either lol I'm just practicing
const verbArray = ['jumps', 'runs', 'bans', 'licks'];

let nonsenseArray = [];
const genNonsense = (nounArray, artclArray, verbArray) => {
    nonsenseArray.push(nounArray[Math.floor(Math.random() * 6)]);
    nonsenseArray.push(artclArray[Math.floor(Math.random() *2)]);
    nonsenseArray.push(verbArray[Math.floor(Math.random() * 3)]);
    nonsenseArray.push(nounArray[Math.floor(Math.random) * 6]);
    nonsenseArray.push(artclArray[Math.floor(Math.random() * 2)]);
    nonsenseArray.reverse();
};

console.log(nonsenseArray);



