


let componentContainer = document.querySelector("#messages");
console.log(componentContainer); 



const sectionCreator =  (content) => {

let dispMessage = document.createElement("section");

dispMessage.className = "messages";
dispMessage.textContent = `${content}`;
componentContainer.appendChild(dispMessage);
console.log(componentContainer);

}



sectionCreator(" After last year's 'tree incident', should we?");
sectionCreator("The fire fighters put it out in like a minute. Wasn't even a real fire.");
sectionCreator("We can set them off in the street.");
sectionCreator("Our neighbors' houses are flammable, too");



