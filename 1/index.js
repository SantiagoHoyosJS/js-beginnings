const body = document.getElementsByTagName("body")[0]  // the method returns an array of elements with that tag name

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor( ){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    
    // alt + 96 paa la tilde invertida
    const color = `rgb(${red}, ${green}, ${blue})`  
    body.style.backgroundColor = color;
}
