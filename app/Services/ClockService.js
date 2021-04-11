class ClockService {

    getTime() {
        let myTime = setInterval(function time() {
            myTimer();
        }, 1000);

        function myTimer() {
            var t = new Date();
            document.getElementById("clocks").innerHTML = t.toLocaleTimeString();
        }
    }
}
export const clockService = new ClockService()