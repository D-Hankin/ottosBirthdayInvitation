const yesBox = document.getElementById("yesBox");
const noBox = document.getElementById("noBox");
const nameInput = document.getElementById("name");
const submitButton = document.getElementById("submitButton");
const menu = document.getElementById("menu");
const noOfMeatSelect = document.getElementById("noOfMeatMenu");
const noOfVegSelect = document.getElementById("noOfVegMenu");
let coming;
let nameVar;

menu.style.display = "none";

function yesBoxFunction() {
    if (noBox.checked) {
        noBox.checked = false;

    }
    menu.style.display = "block"
    
}

function noBoxFunction() {
    if (yesBox.checked) {
        yesBox.checked = false;


    }

    menu.style.display = "none";

}

submitButton.addEventListener("click", () => {

    nameVar = nameInput.value; 

    if (yesBox.checked) {
        coming = "coming";
    } else {
        coming = "not coming"
    }

    let noMeat = noOfMeatSelect.value;
    let noVeg = noOfVegSelect.value;

    console.log(nameVar + " " + coming + " " + noMeat + " " + noVeg);

    fetch(".vscode/responses.json", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"},
            body:JSON.stringify(
                {name : nameVar,
                response: coming, 
                NumMeat: noMeat, 
                NumVeg: noVeg})
        
    })
    .then(res => res.json)
    .then(data => {
        console.log("Yey!")
    })


})