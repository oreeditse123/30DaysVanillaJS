const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime(){
    let now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    console.log(hours);
}

setInterval(setTime, 1000);