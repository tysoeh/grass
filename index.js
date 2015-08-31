

var lawn = document.getElementById('lawn');

var bladeRate = [];

for (var i = 0; i <= 200; i++) {
    var newBlade = document.createElement('div');
    newBlade.randomRate = Math.floor((Math.random() * 10) + 1);
    lawn.appendChild(newBlade);
    newBlade.className = "blade " + "color" + Math.floor((Math.random() * 3) + 1);
    console.log(newBlade);
};

var blades = document.getElementsByClassName('blade');
console.log(blades);

setInterval(function() {
        for (var i = 0; i < blades.length; i++) {
            var bladeHeight = blades[i].clientHeight;
            bladeHeight += blades[i].randomRate;
            blades[i].style.height = bladeHeight + 'px';
            console.log(bladeHeight);
        }
    },
    50);
