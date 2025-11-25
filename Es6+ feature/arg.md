# argument ... 

1. ... ka matalb hota hai ki mutliple argu. lena chaiye jitna to 

example 

``` const sum = (...args) => {
  
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
} ``` 