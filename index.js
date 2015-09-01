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

    this.beds = Array.prototype.slice.call(document.getElementsByTagName('h2')); //get a list of the h2 elements on DOM as a node list - convert it to a regular Array

    this.beds.forEach(function (bed) {
        //for each bed, add a `lawn` as the `view` where we later attach blades
        bed.view = document.createElement('span');
        bed.view.className = 'lawn';

        bed.appendChild(bed.view); //put this view on the bed, which is ultimately an `h2`

        self.seedGrass(bed);
    });
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

Lawn.prototype.startGrowing = function () {
    setInterval(this.grow(), this.frequency);
};

Lawn.prototype.grow = function () {
    var self = this;

    //a closure - all this `grow` function does is make a reference to `self` and return a function that can access that scope later
    return function () {
        self.beds.forEach(function (bed) {
            bed.blades.forEach(function (blade) {
                blade.grow();
            });
        });
    };
};

var lawn = new Lawn(60, 1000);
lawn.makeGardenBeds();
lawn.startGrowing();
