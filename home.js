const bikes = JSON.parse(localStorage.getItem('bikes')) || [];
let display = document.getElementById('display');
let filterBtn = document.getElementById('filterBtn');
document.addEventListener('DOMContentLoaded' , ()=>{

    for(let i =0 ; i<bikes.length;i++){
    let imgWrapper = document.createElement('div');
    imgWrapper.setAttribute('class' , 'wrapper');
    
    let img = document.createElement('img')
    img.src = bikes[i].fileName;
    imgWrapper.append(img);
    display.append(imgWrapper);
    }
    filterBtn.addEventListener('click' , filterBikes);
   
    function filterBikes(event){
        event.preventDefault();
        result = bikes.filter(filterBike);
        console.log(result);
    }
    function filterBike(bike){
        console.log(bike);
        return bike['bikeType'] == "Scooter";
    }
   
})
