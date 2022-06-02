import {buttons,screen} from "./index.js";

const smallSize = () =>{
    if(screen.firstChild.length > 15 ) {
      screen.style.fontSize = "2.2em";
    }
  }
 
const normalSize = () =>{
    if(screen.firstChild.length < 15 ) {
      screen.style.fontSize = "3.2em";
    }
  }

const lastValue = () => screen.textContent.substring(screen.textContent.length-1);

const operation = text =>{
    if(screen.textContent == "0" && text !== ".") screen.textContent = "";
    
    if(isNaN(lastValue()) && isNaN(text)){
        screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
    }
    screen.textContent += text;
}

const resetScreen = () =>{
    screen.textContent = "0";
}

const result = () =>{
    if(isNaN(lastValue())) screen.textContent = screen.textContent.substring(0,screen.textContent.length-1); 
    screen.textContent = eval(screen.textContent); 
    
}
const deleteLastNum = () =>{
    if(screen.textContent == "0"){ 
    }else{
        screen.textContent = screen.textContent.slice(0,-1)
    }
}

buttons.forEach(element=>element.addEventListener("click", (e) =>{
    switch(e.target.value){
        case "=": result(); break;
        case "RESET": resetScreen(); break;
        case ".": operation("."); break;
        case "DEL": deleteLastNum() ; break;
        default: operation(e.target.value); break;
    }
    smallSize();
    normalSize();
}))