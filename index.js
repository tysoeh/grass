function lawnInit (){
  
  //cycle through all grass elements and assign each to a new "blade" object with
  //a starting height of 0, random grow rate and shade of green. each object calls the grow function
  //with their grow rate as a parameter

  
}
function Blade (height, color, elementId){
  this.height = height;
  this.color = color;
  this.elementId = elementId;
  //this is the 'blade of grass factory' that pumps out a "blade" object and attaches it to a blade of grass on the DOM
  //requirements: starting height = 0, random grow rate assigned, random shade of green assigned, calls the grow function
  //on a set interval determined by the grow rate
}


Blade.prototype.grow = (){
  
  
  //make blade increase in height by a pixel
}
