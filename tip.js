let calculate = document.getElementById("calculate");
let ServiceLevel = document.querySelector("div");
let NumberOfPersons = document.getElementById("NumberofPersons");
let tipValue = document.getElementsByClassName("tip");

calculate.addEventListener('click', () => {
    let total = document.getElementById("Totalbill").value;
    for (let i =0; i < ServiceLevel.length; i++) {
        if(ServiceLevel[i].checked) {
            tipValue.innerHTML = total * ServiceLevel[i].value / NumberOfPersons.value;
        }
    }
     
})
