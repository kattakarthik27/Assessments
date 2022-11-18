let char = new Set(['a','a','b','c','c','d']);
console.log(char);
console.log(typeof(char));
console.log(char instanceof Set);
console.log(char.size);

char.add('e');
console.log(char);

char.add('f');
char.add('g');
console.log(char);

let exists = char.has('a');
console.log(exists);

let notexists = char.has('z');
console.log(notexists);

char.clear();
console.log(char);

char.add('h');
console.log(char);

char.delete('h');
console.log(char);

console.log(char);