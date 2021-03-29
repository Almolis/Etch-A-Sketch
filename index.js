// #### CREATE CUSTOM BOARD
function createBoard (rows, columns) {
    let table = document.querySelector(".table"); 
    for (let i =1; i <= rows; i++) {
        let tr = document.createElement("tr"); 
        table.append(tr); 
        for (let j=1; j <= columns; j++) {
            let td = document.createElement("td");  
            table.append(td); 
        }
    } return table
}

createBoard(100, 150)


//##### SKETCH FUNCTIONALITY 

let td = document.querySelectorAll("td");
td.forEach(element => {
        element.addEventListener("mouseover", setColor);
      });      

function setColor(){
        this.style.background = "grey";
      }


//#### RESET TABLE 

let button = document.querySelector("button")
button.addEventListener("click", resetTable)

function resetTable () {
    let children = document.querySelector(".table").children;
    for (let i=0; i<=children.length; i++){
        children[i].style.backgroundColor = "white"; 
    } 
}
