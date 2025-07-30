//STEP 1: CREATE ELEMENT
const newH1 = document.createElement("h1");

//STEP 2: ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "Created from JS";
newH1.id = "myH1";

//STEP 3: APPEND ELEMENT TO DOM
document.body.append(newH1);

//REMOVE ELEMENT
document.body.removeChild(newH1);