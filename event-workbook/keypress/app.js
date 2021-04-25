/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

var body = document.getElementById("body")

var  keyCodeFunction = (event) => {
    if (event.keyCode == "82"){
        body.style.backgroundColor = "red"
    };
     if (event.keyCode == "87"){
        body.style.backgroundcolor = "white"
    };
    if (event.keyCode == "71"){
        body.style.backgroundColor= "green"
    };
     if (event.keyCode == "89"){
        body.style.backgroundColor = "yellow"
    };
     if (event.keyCode == "80"){
        body.style.backgroundColor = "purple"
    };
     if (event.keyCode == "66"){
        body.style.backgroundColor = "black"    
    };
    
    alert(event.keyCode);
    console.log(event);
    };

window.addEventListener("keydown", keyCodeFunction);