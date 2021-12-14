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
  var addMeButton = document.getElementById("add-me-button");
  var newItem = document.getElementById("input");

  function tick(btn, item){
      btn.disabled = true;
      item.className = "ticked";
    }

  milkButton.onclick = function(){tick(milkButton, milk)};
  breadButton.onclick = function(){tick(breadButton, bread)};
  eggsButton.onclick = function(){tick(eggsButton, eggs)};

  addMeButton.onclick = function(){
  }

  console.log("We're set up and ready to rumble!")
};