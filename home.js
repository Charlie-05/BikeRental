const bikes = JSON.parse(localStorage.getItem('bikes')) || [];
console.log(bikes);

const bikeTypes = ['Standard', 'Off-Road', 'Choppers', "Touring",
    'Scrambler', 'Cruiser', 'SportBike', 'Scooter', 'Moped', 'Electric', 'Bicycle']
const bikeBrands = ['Yamaha', 'TVS', 'Bajaj', 'KTM', 'Hero', 'Honda', 'Suzuki'];
let display = document.getElementById('display');
if(bikes.length == 0){
    display.innerHTML = "No bikes to display";
}
let filterByType = document.getElementById('filterByType');
let filterByBrand = document.getElementById('filterByBrand')
document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < bikes.length; i++) {
        let displayBike = document.createElement('div');
        displayBike.setAttribute('class' , 'min-container');
        console.log(bikes.length);
        if(bikes.length != 0){
       
        
        
        displayBike.innerHTML = `<div class="wrapper"><img src=${bikes[i].fileName}></img></div><br>
        Brand : ${bikes[i].bikeBrand}<br>
        Modal: ${bikes[i].bikeModal}`;
       }
        
        display.append(displayBike);
    }
    filterByType.addEventListener('click', filterBikes);

    function filterBikes(event) {
        event.preventDefault();
        bikes.forEach(bike => {
            bikeTypes.forEach(element => {
                if (bike['bikeType'] == element) {
                    display.append(bike.bikeType);
                }else{
                    console.log('231')
                }
            }
            )
        })

    }



    function filterBike(bike) {
        console.log(bike);
        return bike['bikeType'] == "Scooter";
    }
  
})
function searchBike(event) {
    let search = event.target.value;
    console.log(search);
}

