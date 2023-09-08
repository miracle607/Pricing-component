let firstButton = document.querySelector(".firstbutton")
let toggleDiv = document.querySelector(".togglediv")
let dollar1 = document.querySelector(".dollar1")
let dollar2 = document.querySelector(".dollar2")
let dollar3 = document.querySelector(".dollar3")
// let myObject = [{
//     month : 12,
//     year : 24
// }];

let myObject = [{ month:"12.99",
 yearly: "299.99"}];
//  myDollar = [`${dollar1.value},${dollar2.value},${dollar3.value}`]
//  console.log(myDollar);

// console.log(myObject[0].month);

firstButton.addEventListener("click", () => {
  toggleDiv.classList.toggle("active")
let tgg = toggleDiv.classList.contains("active");
myObject.forEach(object => {
    if(tgg){
    object = object[1];
    objectMonth = object;
    dollar1.innerHTML = `$1${object}`;
 console.log(myObject[0]);
          }else{
    object = object[0];
    objectYear = object
    dollar1.innerHTML = `$1${objectYear}`;
    console.log(myObject[1]);
          }
});

} )