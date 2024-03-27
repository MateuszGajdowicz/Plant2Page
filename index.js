//let WateringButton = document.getElementById("Watering");
//
//WateringButton.onclick = function(){
//    var Date = new Date();
//    let WateringDate = document.getElementById("p1");
//    WateringDate.textContent = Date.toLocalString();
//    }
function waterPlant2() {
        var currentDate = new Date();
        var formattedDate2 = currentDate.toLocaleString();
        var WateringDate2 = document.getElementById('p1');
        WateringDate2.textContent = formattedDate2;

        window.location.href = 'https://mateuszgajdowicz.github.io/CongratulationsPage/';
        localStorage.setItem("lastWateringDate2", formattedDate2);
        }
window.onload = function(){
    var lastWateringDate2 = localStorage.getItem("lastWateringDate2");
    if(lastWateringDate2){
    document.getElementById('p1').textContent =  lastWateringDate2;}}

