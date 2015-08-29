var beds = document.getElementsByTagName("h2");
  console.log(beds);

//var lawn = document.getElementById('lawn');
var blades = document.getElementsByClassName('blade');
//console.log(blades);
setInterval(function() {
        for (var i = 0; i < blades.length; i++){
            var bladeHeight = blades[i].clientHeight;
            bladeHeight += Math.floor((Math.random() * 10) + 1);
            blades[i].style.height = bladeHeight + 'px';
            //console.log(bladeHeight);
        }
    },
    2000);
    


function makeGardenBeds(){  //for each h2 element, make a div above (lawn) and a div below (soil)
  
    for (var i = 0; i<beds.length; i++){ //should "i" start at 0 or 1?
      var newSoil = document.createElement('span'); //may need to be span
      newSoil.className = "soil";
      beds[i].appendChild(newSoil);
      console.log(newSoil);
      
      var newLawn = document.createElement('span');
      newLawn.className = "lawn";
      beds[i].appendChild(newLawn);
      console.log(newLawn);
    }
}

/*function seedGardenBeds(){  //for each lawn element, make blades of grass
  for (var i = 0; i<beds.length; i++){
    
    for (var j = 0; j <= 50; j++) {
      var newBlade = document.createElement('div');
      thisLawn.appendChild(newBlade);
      newBlade.className = "blade";
      //console.log(newBlade);
    }
  }
}*/

makeGardenBeds();
//seedGardenBeds();

// function Blade(instanceNum) {
//     this.instanceNum = instanceNum;
//     // var blade = document.getElementById("blade");
//     var bladeClone = blade.cloneNode(true);
//     console.log(bladeClone);
//     bladeClone.id = "blade" + instanceNum; //in case we need to call this instance in the future
//     document.getElementById("lawn").appendChild(bladeClone); //attach this instance to the lawn
//     var bladeHeightValue = 0;
//     var bladeHeight = bladeClone.style.height = bladeHeightValue + "px";
//     console.log(bladeClone.style.height);
//     bladeClone.style.color = "green";
//     bladeClone.style.position = "absolute";
//     bladeClone.style.left = instanceNum + "px"; //sets absolute position from the left equal to its instance number
//     console.log(bladeClone.style.left);

//     //bladeClone.style.color = bladeColor; //mess with this later- randomize shade of green
//     //var bladeColor = randomizer();

//     var bladeGrowRate = Math.floor(Math.random() * 300 + 150); //sets a random number between 149 and 449
//     setInterval(function() {
//         grow()
//     }, bladeGrowRate); //calls the grow function at the rate of whatever random number was just assigned


//     function grow() { //makes blade increase in height by a pixel
//         bladeHeightValue++;
//         bladeHeight = bladeClone.style.height = bladeHeightValue + "px";
//     }

// }
// for (i = 0; i <= 449; i++) { //create "i" number of blades
//     Blade(i);
//     document.getElementById("soil").style.width = i + 1 + "px"; //make the soil as wide as the number of blades of grass
// }
// bladeHeightValue++;
// bladeHeight = bladeClone.style.height = bladeHeightValue + "px";
// }
// }
// for (i = 0; i <= 200; i++) { //create "i" number of blades
//     Blade(i);
//     document.getElementById("soil").style.width = i + 1 + "px"; //make the soil element as wide as the number of blades of grass
// }
