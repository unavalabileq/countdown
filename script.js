document.addEventListener('DOMContentLoaded', function() {
    var dateElement = document.getElementById('date');
    var durationElement = document.getElementById('duration');

    var variableDate = new Date('2024-02-06'); // Set your variable date here

    setInterval(updateDateTime, 1); // Update every millisecond

    function updateDateTime() {
        var currentDate = new Date();
        var day = currentDate.getDate().toString().padStart(2, '0');
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var year = currentDate.getFullYear().toString().slice(-2);
        var hours = currentDate.getHours().toString().padStart(2, '0');
        var minutes = currentDate.getMinutes().toString().padStart(2, '0');
        var seconds = currentDate.getSeconds().toString().padStart(2, '0');
        var milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

        var formattedDateTime = day + ' | ' + month + ' | ' + year + ' ' + hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
        dateElement.innerHTML = formattedDateTime;

        var duration = Math.abs(currentDate - variableDate);
        var durationDays = Math.floor(duration / (1000 * 60 * 60 * 24));
        duration %= 1000 * 60 * 60 * 24;
        var durationHours = Math.floor(duration / (1000 * 60 * 60));
        duration %= 1000 * 60 * 60;
        var durationMinutes = Math.floor(duration / (1000 * 60));
        duration %= 1000 * 60;
        var durationSeconds = Math.floor(duration / 1000);
        var durationMilliseconds = duration % 1000;

        var formattedDuration = durationDays + ' days and ' + durationHours + ' hours, ' + durationMinutes + ' minutes, ' + durationSeconds + ' seconds ' + ' until 2.0 releases';
        durationElement.innerHTML = formattedDuration;
    }
});