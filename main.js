window.onload = () => {
    setUp();
};

const items = [
    {
        name: "Milk",
        checked: false,
    },
    {
        name: "Bread",
        checked: false,
    },
    {
        name: "Eggs",
        checked: false,
    },
]; //ad me button would add item to array  - input validation so empty string cannot be added

const tick = (btn, item) => {
    btn.disabled = true;
    item.className = "ticked";
  }

/* const addItem = (ev)=>{
    ev.preventDefault()
} */

const setUp = () => {

    for(let i=0; i<items.length; i++){

        var div = document.createElement("div");
        items[i].span = document.createElement("span");
        items[i].button = document.createElement("button");
        
        div.className = "item";
        items[i].span.textContent = items[i].name;

        items[i].button.onclick = function(){tick(items[i].button, items[i].span)}
        items[i].button.textContent = "Tick!";
        
        div.appendChild(items[i].span);
        div.appendChild(items[i].button);
        document.body.appendChild(div);
    }

   /* for(let i=0; i<items.length; i++){

        items[i].button.onclick = function(){tick(items[i].button, items[i].span)}
    }  */

    //button.onclick = function(){tick(button, span)};

   /*  document.addEventListener('DOMContentoaded', ()=>{
        document.getElementById('add-me-button').addEventListener('click', addItem)
    })
   
 */

  console.log("We're set up and ready to rumble!")
};