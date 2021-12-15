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
];

const tick = (btn, item) => {
    btn.disabled = true;
    item.className = "ticked";
  }

const addItem = (ev)=>{
    ev.preventDefault();

    var itemName = document.getElementById('new-item').value;

    let item = {
        
        name: itemName,
        checked: false
    }
    items.push(item);
    renderShoppingItem(items.length-1);
    document.forms[0].reset();
}

const renderShoppingItem = (index) => {
    var item = items[index];
    var div = document.createElement("div");
    div.className = "item";
    document.body.appendChild(div);

    item.span = document.createElement("span");
    item.span.textContent = item.name;
    div.appendChild(item.span);

    item.button = document.createElement("button");
    item.button.onclick = function(){tick(item.button, item.span)}
    item.button.textContent = "Tick!";
    div.appendChild(item.button);
}

const setUp = () => {

    //document.getElementById('add-me-button').addEventListener('click', addItem);

    var addBtn = document.getElementById('add-me-button');
    addBtn.addEventListener('click', addItem);
    
    for(let i=0; i<items.length; i++){
        renderShoppingItem(i);
        console.log(items[i]);
    }

  console.log("We're set up and ready to rumble!")
};