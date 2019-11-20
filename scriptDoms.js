function whereWeGoin() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
        let destination = json[3];
        const div = document.getElementById("missionTarget");
            div.innerHTML = `
                <ol>
                    <li>Name: ${destination.name}</li>
                    <li>Diameter: ${destination.diameter}</li>
                    <li>Star: ${destination.star}</li>
                    <li>Distance from Earth: ${destination.distance}</li>
                    <li>Number of Moons: ${destination.moons}</li>
                </ol>
                <img src='${destination.image}'>
            `;
        });
    });
}

function updateStatus(){
    let fuelLevelInput = document.querySelector("input[fuel=fuelLevel]").value;
    let cargoKgInput = document.querySelector("input[cargo=cargoKg").value;

    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (fuelLevelInput>10000 && cargoKgInput<10000) {
        launchStatus.innerHTML = " Shuttle is ready for launch!";
        launchStatus.style.color = "green";
        faultyItems.style.visibility = "hidden";

    }else{
        launchStatus.innerHTML = "Shuttle not ready for launch!";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
        if (fuelLevelInput<10000){
            fuelStatus.innerHTML = "Not enough fuel to complete mission.";
        }
        if (cargoKgInput>10000){
            cargoStatus.innerHTML = "Too much cargo weight. Will not achieve liftoff.";
        
        }
    }
}
function initialAlert(message){
    alert(message)
    event.preventDefault();
}

function validateEntries() {
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let coPilotNameInput = document.querySelector("input[name=coPilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLeve]");
   let cargoKgInput = document.querySelector("input[name=cargoKg]");


    if (pilotNameInput.value === ""|| coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoKgInput === "") {
        initialAlert("All fields are required!");

    }else if (isNaN(fuelLevelInput.value) || (isNaN(cargoKgInput.value) || !(isNaN(pilotNameInput.value) || !(isNaN(coPilotNameInput.value))){
        initialAlert ("Data type error! Please review input types");
    }else{
        let pilotStatus = document.getElementById("pilotStatus");
        let coPilotStatus = document.getElementById("coPilotStatus");
        pilotStatus.innerHTML = (`Pilot ${pilotNameInput.value} ready`)
        coPilotStatus.innerHTML = (`CoPilot ${coPilotNameInput.value}ready`)
        updateStatus();
    ]
}

window.addEventListener("load", function() {
   whereWeGoin();
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(event) {
      validateEntries();  

   });
})