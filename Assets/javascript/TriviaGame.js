
$(function(){
    myCounter.Init();
});

var myCounter = {
    Init: function() {
        this.$target = $( "#START").attr("disabled", true);
        this.EnableSTART();
        this.Eventhandler();
    },

    EnableSubmit: function() {
        var value = this.Get("START-button");
        var now = now();
        if( !value ) {
            this.$target.removeAttr("disabled");
            return;
        }
        setTimeout(function() {
            Program.EnableSubmit(); },
            value - now;
        },

        Submit: function() {
            this.$target.attr("disabled", true);
            this.Set("START-button", Date.now() + 30000, {
                expire_in: "seconds"
            });

        Eventhandler: function(){
            this.$target.on("click", function() {
                Program.Subit();
        },

var myCounter = new Countdown ( { 
    seconds: 30,
    onUpdateStatus: function(sec) {console.log(sec);},
    onCounterend: function() { alert ("Time is up!");}
});

myCounter.start();

class Countdown {
    constructor(options) {
        var timer, instance = this;
        seconds = options.seconds || 30; 
        updateStatus = options.onUpdateStatus || function () { };
        counterEnd = options.onCounterEnd || function () { };

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















