// Write your JavaScript code here!
function whereWeGoin() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      let destination = json[0];
      const div = document.getElementById("missionTarget")
      div.innerHTML = `
         <ol>
         <li>Name: ${destination.name}</li>
         <li>Diameter: ${destination.diameter}</li>
         <li>Star: ${destination.star}</li>
         <li>Distance from Earth: ${destination.distance}</li>
         <li>Number of Moons: ${destination.moons}</li>
       </ol>
       <img src="${destination.image}">
      `;
   });
});  

event.preventDefault();

function validateEntries(){
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let coPilotNameInput = document.querySelector("input[name=coPilotName]");
   let fuelLevelInput = document.querySelector("input[fuel=fuelLevel]");
   let cargoKgInput = document.querySelector("input[cargo=cargoKg");

       if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoKg.value === ""){
           alert ("All fields are required!");

        } else if (!(isNaN(pilotNameInput.value)) || !(isNaN(coPilotNameInput.value)) || isNaN(fuelLevelInput.value) || isNaN(cargoKgInput.value)){
           alert ("Data type error! Please review input types");

        } else if (fuelLevelInput.value<10000 || cargoKgInput.value>10000){
              alert("Shuttle not ready for launch!");



           }
       
         //    pilotNameInput = document.getElementById("pilotName");
         //    coPilotNameInput = document.getElementById("coPilotNameInput");
         //   let fuelLevelInput = document.querySelector("input[fuel=fuelLevel]");
         //   let cargoKgInput = document.querySelector("input[cargo=cargoKg");
           
       }


   }

window.addEventListener("load", function(){
   whereWeGoin();
let button = document.getElementById("formSubmit");
button.addEventListener("click", function(event) {
      validateEntries();
   });
});