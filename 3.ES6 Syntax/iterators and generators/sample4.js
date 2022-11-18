function* generate(){
    console.log("Invoked first !!!");
    yield 1;

    console.log("Invoked Second !!!");
    yield 2;
}

let gen = generate();
// console.log(gen);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

for(const g of gen)
{
    console.log(g);
}