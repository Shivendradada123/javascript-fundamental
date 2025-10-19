const codder = [
    {id: 1, name: "aditya"},
    {id: 2, name: "shivendra"}
]


const find = codder.find(Element => Element.id == 1)

console.log(find); // output {id: 1, name: "aditya"},

console.log(find.name); // output is aditya only name


