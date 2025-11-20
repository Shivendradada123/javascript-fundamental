# Add New Properties to a JavaScript Object

1. object me new value kaise kaise add kare

````const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "bho bho" ```

2.  yah . ya notiaon se bhi value add kar sakte hai





# Delete Properties from a JavaScript Object


1. object me delete karne ke method

````

const myDog = {
"name": "Happy Coder",
"legs": 4,
"tails": 1,
"friends": ["freeCodeCamp Campers"],
"bark": "woof"
};

e
delete myDog.tails ```

# Using Objects for Lookups

1. lookups in object

````
function phoneticLookup(val) {
  let result = "";


  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",

  }



  result = lookup[val]



  return result;
}

phoneticLookup("charlie"); ```

## dheko lookup matlab object me se kisi value ko find karna 

