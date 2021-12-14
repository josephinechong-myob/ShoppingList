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
  
  function ticked(btn, item){
      btn.disabled = true;
      item.className = "ticked";
    }

  milkButton.onclick = function(){ticked(milkButton, milk)};
  breadButton.onclick = function(){ticked(breadButton, bread)};
  eggsButton.onclick = function(){ticked(eggsButton, eggs)};

  console.log("We're set up and ready to rumble!")
};