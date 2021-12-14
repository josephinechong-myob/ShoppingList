window.onload = () => {
    setUp();
};

const setUp = () => {
  
  var milk = document.getElementById("milk");
  var milkButton = document.getElementById("milk-button");
  var bread = document.getElementById("bread");
  var breadButton = document.getElementById("bread-button");
  var eggs = document.getElementById("eggs");
  var eggsButton = document.getElementById("eggs-button");

  milkButton.onclick = function(){
     milkButton.disabled = true;
     milk.className = "ticked";
  }

  breadButton.onclick = function(){
    breadButton.disabled = true;
    bread.className = "ticked";
 }

 eggsButton.onclick = function(){
    eggsButton.disabled = true;
    eggs.className = "ticked";
 }

  console.log("We're set up and ready to rumble!")
};