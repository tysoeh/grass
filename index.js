'use strict';

function Blade () {
    //one blade of grass - it has a height

    this.height = 0; //start at 0
    this.addView();
    this.addRandomColorClass();
}

Blade.prototype.addView = function () {
    this.view = document.createElement('div');
    this.view.className = 'blade';
};

Blade.prototype.addRandomColorClass = function () {
    this.view.className += ' ' + 'color' + Math.floor((Math.random() * 3));
};

Blade.prototype.grow = function () {
    var growth = Math.floor((Math.random() * 10) + 1);
    this.height += growth;
    this.view.style.height = this.height + 'px';
};

function Lawn (seedCount, frequency) {
    //I have multiple beds, but you specify how many blades of grass to plant in each by passing seedCount
    this.seedCount = seedCount;
    this.frequency = frequency;
}

Lawn.prototype.makeGardenBeds = function () {
    var self = this;

    self.beds = Array.prototype.slice.call(document.getElementsByTagName('h2')); //get a list of the h2 elements on DOM as a node list - convert it to a regular Array

    self.beds.forEach(function (bed) {
        //for each bed, add a `lawn` as the `view` where we later attach blades
        bed.view = document.createElement('span');
        bed.view.className = 'lawn';

        bed.appendChild(bed.view); //put this view on the bed, which is ultimately an `h2`

        self.seedGrass(bed);
    });

    self.grow();

    setInterval(function () {
        //self.grow();
        //self.beds.forEach(function (bed) {
        //    bed.blades.forEach(function (blade) {
        //        console.log(blade.view);
        //    });
        //});
    }, self.frequency);

    //setInterval(self.grow, self.frequency);
};

Lawn.prototype.seedGrass = function (bed) {
    //put multiple blades of grass in a bed

    bed.blades = [];
    for (var i = 0; i <= this.seedCount; i++) {
        var blade = new Blade();
        bed.blades.push(blade); //reference to the blade object
        bed.view.appendChild(blade.view); //put the blade DOM view on the bed DOM view
    }
};

Lawn.prototype.grow = function () {

    //return function () {
        this.beds.forEach(function (bed) {
            bed.blades.forEach(function (blade) {
                blade.grow();
            });
        });
    //};
};

var lawn = new Lawn(88, 1000);
lawn.makeGardenBeds();

//var lawn = document.getElementById('lawn');
//var blades = document.getElementsByClassName('blade'); //get a list of the blade elemnts on DOM
////console.log(blades);
//setInterval(function() { //sets an interval that makes the blades grow a random amount, every 2 seconds
//        for (var i = 0; i < blades.length; i++){
//            var bladeHeight = blades[i].clientHeight;
//            bladeHeight += Math.floor((Math.random() * 10) + 1);
//            blades[i].style.height = bladeHeight + 'px';
//            //console.log(bladeHeight);
//        }
//    },
//    2000);
//
//
//
//function makeGardenBeds(){  //for each h2 element, make a span above (lawn) and a span below (soil)
//    for (var i = 0; i<beds.length; i++){ //should 'i' start at 0 or 1?
//      var newLawn = document.createElement('span');
//      newLawn.className = 'lawn';
//      beds[i].appendChild(newLawn);
//      console.log(newLawn);
//
//      seedGrass(newLawn);
//    }
//}
//
//function seedGrass(lawn){  //for each lawn element, make 50 blades of grass
//    this.lawn = lawn;
//    for (var j = 0; j <= 50; j++) {
//      var newBlade = document.createElement('div');
//      lawn.appendChild(newBlade);
//      newBlade.className = 'blade ' + 'color' + Math.floor((Math.random() * 3));
//      console.log(newBlade);
//    }
//}
//
//makeGardenBeds(); //call the makeGardenBeds function, which makes a garden for every h2 element found on the DOM
