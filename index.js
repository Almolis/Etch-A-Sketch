
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



let td = document.querySelectorAll("td");

td.forEach(element => {
        element.addEventListener("mouseover", setColor);
      });
      
function setColor(){
        this.style.background = "grey";
      }



 