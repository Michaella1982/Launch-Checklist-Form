// Write your JavaScript code here!
function whereWeGoin() {
        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      let destination = json[0];
      const div = document.getElementById("missionTarget");
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


    
}


function validateEntries() {
   let pilotNameInput = document.querySelector("input[name=pilotName]");
    if (pilotNameInput.value === " ") {
        pilotNameWarning = "Please enter a name for the Pilot.\n";
        event.preventDefault();
    }else{
        pilotNameWarning= " ";
    }

   let coPilotNameInput = document.querySelector("input[name=coPilotName]");
    if (coPilotNameInput.value === " "){
        coPilotNameWarning = "Please enter a name for the co-Pilot.\n";
        event.preventDefault();
    }else{
        coPilotNameWarning = " ";
    }

   let fuelLevelInput = document.querySelector("input[fuel=fuelLevel]");
    if (fuelLevelInput.value === " " || fuelLevelInput.value === isNaN){
        fuelLevelWarning = "Please enter a valid fuel amount. Fuel input must be an integer.\n";
        event.preventDefault();
    }else{
        fuelLevelWarning = " ";
    }
   
    let cargoKgInput = document.querySelector("input[cargo=cargoKg");
    if (cargoKgInput.value === " " || fuelLevelInput.value === isNaN){
        cargoKgWarning = "Please enter a valid cargo input amount. Cargo input must be an integer.\n";
        event.preventDefault();
    }else{
        cargoKgWarning = " ";
    }


   if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoKgInput.value === "") {
      alert ("All fields are required!");
      event.preventDefault();
   } else if (!(isNaN(pilotNameInput.value)) || !(isNaN(coPilotNameInput.value)) || isNaN(fuelLevelInput.value) || isNaN(cargoKgInput.value)){
      alert ("Data type error! Please review input types");
      event.preventDefault();

   }else{
      let pilotStatus = document.getElementById("pilotStatus");
      let coPilotStatus = document.getElementById("coPilotStatus");
      pilotStatus.innerHTML = (`Pilot ${pilotNameInput.value} ready`)
      coPilotStatus.innerHTML = (`CoPilot ${coPilotNameInput.value}ready`)
      updateLaunchStatus();

      
   }   

}
 //      if (fuelLevelInput.value<10000 || cargoKgInput.value>10000){
//         alert("Shuttle not ready for launch!");



window.addEventListener("load", function() {
   whereWeGoin();
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(event) {
      validateEntries();  

   });
});