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
        checked: false, //update field in const tick
    },
];

const tick = (btn, item) => {
    btn.disabled = true;
    item.className = "ticked";
  }

const addItem = (ev)=>{
    ev.preventDefault();

    var itemName = document.getElementById('new-item').value;
    var inputValidator = /[A-Za-z]+/
    
    if(itemName !== '' && inputValidator.test(itemName)){

        let item = {

            name: itemName,
            checked: false
        }
        
        items.push(item);
        renderShoppingItem(items.length-1);
        document.forms[0].reset();
    }
    else{
        window.alert("Please enter a value")
    }
}

const renderItemName = (item, div) => {
    item.span = document.createElement("span");
    item.span.textContent = item.name;    
    div.appendChild(item.span);
}

const renderTickButton = (item, div) => {
    item.button = document.createElement("button");
    item.button.onclick = function(){tick(item.button, item.span)}
    item.button.textContent = "Tick!";
    div.appendChild(item.button);
}

const renderShoppingItem = (index) => {
    var item = items[index];
    var div = document.createElement("div");
    div.className = "item";
    document.body.appendChild(div);

    renderItemName(item, div);
    renderTickButton(item, div);
}

const setUp = () => {

    var addBtn = document.getElementById('add-me-button');
    addBtn.addEventListener('click', addItem);
    
    for(let i=0; i<items.length; i++){
        renderShoppingItem(i);
        console.log(items[i]);
    }

  console.log("We're set up and ready to rumble!")
};