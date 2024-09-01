document.addEventListener('DOMContentLoaded', function () {

    function transformFromMinutesToDaysHours(number) {
        const days = Math.floor(number / 1440); // 1440 minutes in a day
        const remainingMinutes = number % 1440;
        const hours = Math.floor(remainingMinutes / 60); // 60 minutes in an hour
        const minutes = remainingMinutes % 60;

        return { days, hours, minutes };
    }

    function addADotEveryThreeDigits(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function calculateSpeedups() {
        const oneMinSpeedUps = parseInt($('#speedup-1min').val()) || 0;
        const fiveMinSpeedUps = parseInt($('#speedup-5min').val()) || 0;
        const oneHourSpeedUps = parseInt($('#speedup-1hour').val()) || 0;
        // const eightHourSpeedUps = parseInt($('#speedup-8hours').val());

        console.log(oneMinSpeedUps, fiveMinSpeedUps, oneHourSpeedUps);

        let sum = oneMinSpeedUps + fiveMinSpeedUps * 5 + oneHourSpeedUps * 60 //+ eightHourSpeedUps * 480;

        let { days, hours, minutes } = transformFromMinutesToDaysHours(sum);

        let result = '';

        if (days > 0) {
            result = `You have ${addADotEveryThreeDigits(days)} days`;
            if (hours > 0 && minutes === 0) {
                result += ` and ${addADotEveryThreeDigits(hours)} hours`;
            }
            if(hours > 0 && minutes > 0){
                result += `, ${addADotEveryThreeDigits(hours)} hours`;
            }
            if (minutes > 0) {
                result += ` and ${addADotEveryThreeDigits(minutes)} minutes`;
            }
        } else if (hours > 0) {
            result = `You have ${addADotEveryThreeDigits(hours)} hours`;
            if (minutes > 0) {
                result += ` and ${addADotEveryThreeDigits(minutes)} minutes`;
            }
        } else {
            result = `You have ${addADotEveryThreeDigits(minutes)} minutes`;
        }

        result += " worth of speedups.";

        $('#speedup-result').text(result);

    }

    $('#speedup-1min, #speedup-5min, #speedup-1hour').keyup(calculateSpeedups);

});