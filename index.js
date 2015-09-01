var beds = document.getElementsByTagName("h2"); //get a list of the h2 elements on DOM
//console.log(beds);

//var lawn = document.getElementById('lawn');
var blades = document.getElementsByClassName('blade'); //get a list of the blade elemnts on DOM
//console.log(blades);
setInterval(function() { //sets an interval that makes the blades grow a random amount, every 2 seconds
        for (var i = 0; i < blades.length; i++){
            var bladeHeight = blades[i].clientHeight;
            bladeHeight += Math.floor((Math.random() * 10) + 1);
            blades[i].style.height = bladeHeight + 'px';
            //console.log(bladeHeight);
        }
    },
    2000);



function makeGardenBeds(){  //for each h2 element, make a span above (lawn) and a span below (soil)
    for (var i = 0; i<beds.length; i++){ //should "i" start at 0 or 1?
      var newLawn = document.createElement('span');
      newLawn.className = "lawn";
      beds[i].appendChild(newLawn);
      console.log(newLawn);

      seedGrass(newLawn);
    }
}

function seedGrass(lawn){  //for each lawn element, make 50 blades of grass
    this.lawn = lawn;
    for (var j = 0; j <= 50; j++) {
      var newBlade = document.createElement('div');
      lawn.appendChild(newBlade);
      newBlade.className = "blade " + "color" + Math.floor((Math.random() * 3));
      console.log(newBlade);
    }
}

makeGardenBeds(); //call the makeGardenBeds function, which makes a garden for every h2 element found on the DOM
