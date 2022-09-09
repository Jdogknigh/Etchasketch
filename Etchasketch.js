const containerDiv = document.querySelector('#container');
let gridCount = 0
var resp = window.prompt("Row and Collum number??");
// while (gridCount < 32 ){
//     const gridDivs = document.createElement("div");
//     gridDivs.classList.add("content");
//     gridDivs.textContent = "hello"
//     containerDiv.appendChild(gridDivs);
//     gridCount++;
// }    console.log(gridCount)


function makeRows(rows, cols) {
    if (resp <= 100){
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
    //   cell.innerText = (c + 1);
      newCell = (c+1)
      containerDiv.appendChild(cell).className = "grid-item";
      containerDiv.appendChild(cell).id="celling"+newCell
      console.log(cell.id)
    };
}
else {
    (window.alert("Too high!"))
location.reload()}
  };

makeRows(resp, resp);
const test = document.getElementById("container");

test.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = randomColor;})
    // event.target.style.backgroundColor = "orange";})

test.addEventListener('mouseout', (event) => { 
     
event.target.style.backgroundColor = "white"

setTimeout(() => {
    event.target.style.color = "";
  }, 5);
}, false);
// function changeColor(){
//     document.element.style.backgroundColor = "red";

// }

// function changeBack(){
//     document.element.style.backgroundColor = "white";

// }