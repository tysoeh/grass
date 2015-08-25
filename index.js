function blade() {
}

var lawn = document.getElementById('lawn');

for (var i= 0; i <= 50; i++) {
  var newBlade = document.createElement('div');
  lawn.appendChild(newBlade);
  newBlade.className = "blade";
  console.log(newBlade);
};


var blades = document.getElementsByClassName('blade');
console.log(blades);

setInterval(function(){
for (var i = 0; i < blades.length; i++) {
  var bladeHeight = blades[i].clientHeight;
  bladeHeight += Math.floor((Math.random() * 10) + 1);
  var bladeGrowth = bladeHeight.toString + 'px';
  bladeGrowth = blades[i].style.height;
  console.log(bladeHeight);
}
},
 2000);

