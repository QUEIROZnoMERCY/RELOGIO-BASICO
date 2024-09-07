function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    document.getElementById('hour').innerHTML = hour.toString().padStart(2, '0');
    document.getElementById('minute').innerHTML = minute.toString().padStart(2, '0');
    document.getElementById('second').innerHTML = second.toString().padStart(2, '0');
}

setInterval(updateClock, 1000);