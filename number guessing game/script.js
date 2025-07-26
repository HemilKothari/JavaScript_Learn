const minNum = 36;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = Number(window.prompt(`Guess number between ${minNum} - ${maxNum}`))

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        window.alert(`Please enter a valid number`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert(`Number too low`)
        } else if (guess > answer) {
            window.alert(`Number too hight`)
        } else {
            window.alert(`You have guessed it correct. Attempts Taken: ${attempts}`)
            running = false
        }
    }

}