// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener('click', function () {
        const confirm1 = window.confirm('Are you positive we should take off')
        if (confirm1 === true) {
            let fS1 = getElementbyID("flightStatus";
            fS1.innerText("Shuttle in flight")
        }

    })
});