function Blade (instanceNum){
  this.instanceNum = instanceNum;
  var blade = document.getElementById("blade");
  var bladeClone = blade.cloneNode(true);
  bladeClone.id = "blade" + instanceNum; //in case we need to call this instance in the future
  console.log(bladeClone);
  var bladeHeight = bladeClone.style.height;
  bladeClone.style.left = instanceNum; //sets absolute position from the left equal to its instance number
  
  //bladeClone.style.color = bladeColor; //mess with this later- randomize shade of green
  //var bladeColor = randomizer();
  
  var bladeGrowRate = Math.floor(Math.random() * 1000 + 1); //sets a random number between 1 and 1000
  window.setInterval(this.grow(), bladeGrowRate); //calls the grow function for this instance at an interval of every bladGrowRate seconds
  
  //cycle through all grass elements and assign each to a new "blade" object with
  //a starting height of 0, random grow rate and shade of green. each object calls the grow function
  //with their grow rate as a parameter


  
}
Blade (10);

//for 1-50 call Blade(instanceNum++)

Blade.prototype.grow = function(){
  this.bladeHeight ++; //makes blade increase in height by a pixel
};