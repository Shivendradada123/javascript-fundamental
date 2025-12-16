// function mutliply6(num){
//     return num*6
// }

// mutliply6.power = 3
// console.log(mutliply6(5))
// console.log(mutliply6.power)

// console.log(mutliply6.prototype)

class frind {
  constructor(schoolFrind, codderFrind, chootpgluFrind) {
    this.schoolFrind = schoolFrind;
    this.codderFrind = codderFrind;
    this.chootpgluFrind = chootpgluFrind;
  }
  getSchoolFrind() {
    return this.schoolFrind;
  }
  getCodderfrind() {
    return this.codderFrind;
  }
  getChootPgluFrind() {
    return this.chootpgluFrind;
  }
}

const frinds = new frind("Utsav", "Shivendra Mauhriya", "Jayprakash");


// console.log(frinds.getSchoolFrind);
// console.log(frinds.getCodderfrind);
// console.log(frinds.getChootPgluFrind);

// console.log(frind);
console.log(frinds);

