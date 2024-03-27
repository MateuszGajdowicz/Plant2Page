//let WateringButton = document.getElementById("Watering");
//
//WateringButton.onclick = function(){
//    var Date = new Date();
//    let WateringDate = document.getElementById("p1");
//    WateringDate.textContent = Date.toLocalString();
//    }
function waterPlant() {
        var currentDate = new Date();
        var formattedDate = currentDate.toLocaleString();
        var WateringDate = document.getElementById('p1');
        WateringDate.textContent = formattedDate;

        window.location.href = 'https://mateuszgajdowicz.github.io/CongratulationsPage/';
        localStorage.setItem("lastWateringDate", formattedDate);
        }
window.onload = function(){
    var lastWateringDate = localStorage.getItem("lastWateringDate");
    if(lastWateringDate)
    document.getElementById('p1').textContent =  lastWateringDate;}
