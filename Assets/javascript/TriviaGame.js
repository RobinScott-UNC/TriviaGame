
var myCounter = new Countdown ( { 
    seconds: 30,
    onUpdateStatus: function(sec) {console.log(sec);},
    onCounterend: function() { alert ("Time is up!");}
});

myCounter.start();

class Countdown {
    constructor(options) {
        var timer, instance = this, seconds = options.seconds || 30, updateStatus = options.onUpdateStatus || function () { }, counterEnd = options.onCounterEnd || function () { };
        function decrementCounter() {
            updateStatus(seconds);
            if (seconds === 0) {
                counterEnd();
                instance.stop();
            }
            seconds--;
        }
        this.start = function () {
            clearInterval(timer);
            timer = 0;
            seconds = options.seconds;
            timer = setInterval(decrementCounter, 30000);
        };
        this.stop = function () {
            clearInterval(timer);
        };
    }
}















