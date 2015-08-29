var beds = document.getElementsByTagName("h2"); //get a list of the h2 elements on DOM
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
      
      seedGrass(newLawn);
    }
}

function seedGrass(lawn){  //for each lawn element, make blades of grass
      this.lawn = lawn;
      for (var j = 0; j <= 50; j++) {
      var newBlade = document.createElement('div');
      lawn.appendChild(newBlade);
      newBlade.className = "blade";
      //console.log(newBlade);
    
  }
}

makeGardenBeds();