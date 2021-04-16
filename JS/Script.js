function rotateHands(){
    let date = new Date();
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hoursRotation = 30 * h + m / 2  + s / 120;
    let minutesRotation = 6 * m + s / 10;
    let secondsRotation = 6 * s;

    hours.style.transform = `rotate(${hoursRotation}deg)`;
    minutes.style.transform = `rotate(${minutesRotation}deg)`;
    seconds.style.transform = `rotate(${secondsRotation}deg)`;
}

rotateHands();
setInterval(rotateHands, 1000); // Call rotateHands() after every second.