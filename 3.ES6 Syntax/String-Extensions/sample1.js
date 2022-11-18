const title = 'Jack and Jill Went Up the Hill';
console.log(title.startsWith('Jack'));  //output: true
console.log(title.startsWith('jack'));  //output: false
console.log(title.startsWith('Jill', 9));   //output: true
console.log("============");
console.log(title.endsWith('Hill'));     //output: true
console.log(title.endsWith('hill'));       //output: false
console.log(title.endsWith('Up', 21));