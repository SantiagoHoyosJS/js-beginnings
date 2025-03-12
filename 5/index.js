// we need store and load items

let items = []

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items" // it is used to access the storage

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"

        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx) // wrap the call of a function in other function, so js does not call it automatically

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems) // this overwrite the old items  
}

function addItem() {
    const value = input.value;
    if (!value){
        alert("You cannor add an empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1) // remove one elemente starting the index idx
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)



// Every element in html is either a block or a inline element.
// A block element means it takes up its own rown inside the document 
// and the next element goes in the next row. p tags are block elements
//  input, div, span are inline elements
// Anythingg you add goes in the same row

// here we use local storage. Storage in the browser. This is client side.
// wa cant store sesitive data here, everyone in th pc can access it
