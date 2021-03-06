'use strict';

function Blade (seedCount, bladeSpaceRatio) {
    //one blade of grass - it has a height

    this.width = 100 / (seedCount + bladeSpaceRatio * (seedCount - 1));
    this.marginRight = this.width * bladeSpaceRatio;
    this.height = 0; //start at 0
    this.addView(seedCount);
    this.addRandomColorClass();
}

Blade.prototype.addView = function () {
    //margin right of a blade is 0.25 of a blade width, so we calculate the percentage width based on how many blades are being added with that many margins minus one margin as there is no final margin-right. CSS will remove that margin-right style.

    this.view = document.createElement('div');
    this.view.className = 'blade';
    this.view.style.width = this.width + '%';
    this.view.style.marginRight = this.marginRight + '%';
};

Blade.prototype.addRandomColorClass = function () {
    this.view.className += ' ' + 'color' + Math.floor((Math.random() * 15) + 1);
};

Blade.prototype.grow = function () {
    var growth = Math.floor((Math.random() * 10) + 1);
    this.height += growth; //keep track of this height numerically on the object, the view worries about the `px` suffix
    this.view.style.height = this.height + 'px';
};

function Lawn (seedCount, frequency, bladeSpaceRatio) {
    //I have multiple beds, but you specify how many blades of grass to plant in each by passing seedCount
    this.seedCount = seedCount;
    this.frequency = frequency;
    this.bladeSpaceRatio = bladeSpaceRatio;
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
    for (var i = 1; i <= this.seedCount; i++) {
        var blade = new Blade(this.seedCount, this.bladeSpaceRatio); //a blade needs to be aware of how many siblings it has
        bed.blades.push(blade); //reference to the blade object, not the DOM view of it
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
                blade.grow(); //I call grow() on the blade object - which in turn changes its view
            });
        });
    };
};

var lawn = new Lawn(80, 1000, 0.25); //eighty blades, grow every 1 second, with a space to blade ratio of 0.25
lawn.makeGardenBeds();
lawn.startGrowing();
