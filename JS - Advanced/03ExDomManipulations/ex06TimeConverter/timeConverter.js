function attachEventsListeners() {
    let d = document.getElementById('daysBtn');
    d.addEventListener('click', day);

    let h = document.getElementById('hoursBtn');
    h.addEventListener('click', hours);

    let m=document.getElementById('minutesBtn');
    m.addEventListener('click', minutes);

    let s=document.getElementById('secondsBtn');
    s.addEventListener('click',seconds);

    function day() {
        let currentDay = Number(document.getElementById('days').value);
        document.getElementById('hours').value = currentDay * 24;
        document.getElementById('minutes').value = currentDay * 24 * 60;
        document.getElementById('seconds').value = currentDay * 24 * 60 * 60;
    }

    function hours() {
        let currentHours = Number(document.getElementById('hours').value);
        document.getElementById('days').value = currentHours / 24;
        document.getElementById('minutes').value = currentHours * 60;
        document.getElementById('seconds').value = currentHours * 60 * 60;
    }

    function minutes() {
        let currentMinutes = Number(document.getElementById('minutes').value);
        document.getElementById('days').value = currentMinutes / (24* 60);
        document.getElementById('hours').value = currentMinutes / (60);
        document.getElementById('seconds').value = currentMinutes * 60;
    }

    function seconds() {
        let currentSeconds = Number(document.getElementById('seconds').value);
        document.getElementById('days').value = currentSeconds / (24 * 60 * 60);
        document.getElementById('hours').value = currentSeconds / (60 * 60);
        document.getElementById('minutes').value = currentSeconds / 60;
    }
}
