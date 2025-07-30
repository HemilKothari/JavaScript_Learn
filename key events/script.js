const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {

    event.preventDefault();

    if (event.key.startsWith("Arrow")) {
        myBox.textContent = "😁"
        myBox.style.backgroundColor = "tomato"

        switch (event.key) {
            case "ArrowUp":
                if(y > 0)
                    y -= moveAmount;
                break;

            case "ArrowDown":
                y += moveAmount;
                break;

            case "ArrowLeft":
                if(x > 0)
                    x -= moveAmount;
                break;

            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})

document.addEventListener("keyup", event => {
    myBox.textContent = "😊"
    myBox.style.backgroundColor = "lightblue"
})