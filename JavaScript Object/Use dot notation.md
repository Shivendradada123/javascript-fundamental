#  “Use dot notation where possible”

1. Jaha space nahi hai → DOT notation lagao
2. Jaha space hai → BRACKET notation laga

```
   const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; ```