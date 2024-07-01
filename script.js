function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utc-time');
    const currentDayElement = document.getElementById('current-day');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });

    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = dayOfWeek;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();