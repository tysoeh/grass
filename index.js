function Blade (instanceNum){
  this.instanceNum = instanceNum;
  var blade = document.getElementById("blade");
  var bladeClone = blade.cloneNode(true);
    console.log(bladeClone);
    bladeClone.id = "blade" + instanceNum; //in case we need to call this instance in the future
  document.getElementById("lawn").appendChild(bladeClone); //attach this instance to the lawn
  var bladeHeightValue = 0;
  var bladeHeight = bladeClone.style.height = bladeHeightValue + "px";
    console.log(bladeClone.style.height);
  bladeClone.style.color = "green";
  bladeClone.style.position = "absolute";
  bladeClone.style.left = instanceNum + "px"; //sets absolute position from the left equal to its instance number
    console.log(bladeClone.style.left);
    
  //bladeClone.style.color = bladeColor; //mess with this later- randomize shade of green
  //var bladeColor = randomizer();
  
  var bladeGrowRate = Math.floor(Math.random() * 300 + 150); //sets a random number between 149 and 449
  setInterval(function(){grow()}, bladeGrowRate); //calls the grow function at the rate of whatever random number was just assigned


function grow(){ //makes blade increase in height by a pixel
  bladeHeightValue ++;
  bladeHeight = bladeClone.style.height = bladeHeightValue + "px";
}
  
}
for (i=0; i<=449; i++){ //create "i" number of blades
Blade(i);
document.getElementById("soil").style.width = i + 1 + "px"; //make the soil as wide as the number of blades of grass
}

