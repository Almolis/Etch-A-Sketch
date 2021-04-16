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


/* //##### SKETCH FUNCTIONALITY 

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
} */

//### START SKETCH EVENT 
let table = document.querySelector(".table"); 
table.addEventListener("click", clicked); 
function clicked(){
    if (table.classList.contains("clicked") === true){
        table.classList.remove("clicked")
    } else{
        table.classList.add("clicked");
    }
    console.log(table.classList)
}    
        
 

//STOP SKETCH EVENT 

    //table.addEventListener("click", function(){
      //  if (table.classList.contains("clicked") === true){
        
    //}; 
    //});



//##### SKETCH FUNCTIONALITY 

    let td = document.querySelectorAll("td");
    td.forEach(element => {
        element.addEventListener("mouseover", setColor);
        });      
    
    function setColor(){
        if (table.classList.contains("clicked") === true) {
        this.style.backgroundColor = "grey";
      }
 }
         



//#### ERASE SKETCH

let button = document.querySelector("button")
button.addEventListener("click", eraseSketch)

function eraseSketch () {
    let children = document.querySelector(".table").children;
    for (let i=0; i<=children.length; i++){
        children[i].style.backgroundColor = "white"; 
    } 
}

// add color pallette rgb hex values 
