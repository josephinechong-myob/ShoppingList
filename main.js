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

    var itemName = document.getElementById('new-item').value; //== variable types are the same , === values are the same
    var inputValidator = /[A-Za-z]+/    //** 0 or infinate times for astrick + plus sign is at least 1 or infinate times 
    if(itemName !== '' && inputValidator.test(itemName)){
        let item = {
        
            name: itemName,
            checked: false
        }
    
        items.push(item);
        renderShoppingItem(items.length-1);
        document.forms[0].reset(); //verify if user is inutting an empty string
    }
    else{
        window.alert("Please enter a value")
    }
}


const renderShoppingItem = (index) => {
    var item = items[index];
    var div = document.createElement("div");
    div.className = "item";
    document.body.appendChild(div);

    item.span = document.createElement("span"); //refactor into it's own function
    item.span.textContent = item.name;    
    div.appendChild(item.span);

    item.button = document.createElement("button"); //refactor into it's own function
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