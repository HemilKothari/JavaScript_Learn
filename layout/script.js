// console.log(`Hello`);
// console.log(`Written in js`);

// window.alert(`This is alert box`);

// document.getElementById("id").textContent = `Hello`;
// document.getElementById("id").textContent = `Written in js`;

let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome, ${username}`;
}