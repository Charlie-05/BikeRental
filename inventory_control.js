const bikes = JSON.parse(localStorage.getItem('bikes')) || [];
const bikeTypes = ['Standard', 'Off-Road', 'Choppers', "Touring",
    'Scrambler', 'Cruiser', 'SportBike', 'Scooter', 'Moped', 'Electric', 'Bicycle']
const bikeBrands = ['Yamaha', 'TVS', 'Bajaj', 'KTM', 'Hero', 'Honda', 'Suzuki'];

let form = document.getElementById('inventoryInputForm');

let typeSelect = document.getElementById('bikeType');
let brandSelect = document.getElementById('bikeBrand');
form.classList.add('hidden');
const dateToday = new Date();
const year = dateToday.getFullYear();
let dbImg;
document.addEventListener('DOMContentLoaded', () => {
    // Add method triggering
    let addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', displayInventoryForm);

    function displayInventoryForm() {
        form.classList.remove('hidden');
    //creating options dynamically
        bikeTypes.forEach(type => {
            let option = document.createElement('option');
            option.innerText = type;
            option.value = type;
            typeSelect.append(option);
        });
        bikeBrands.forEach(brand => {
            let option = document.createElement('option');
            option.innerText = brand;
            option.value = brand;
            brandSelect.append(option);
        })

    }
    //Import image
    let importBtn = document.getElementById('importImg');
    importBtn.addEventListener('click', importImage);
    function importImage(event) {
        event.preventDefault();

        let inputFile = document.getElementById('imgFile');
        const fReader = new FileReader();
        fReader.readAsDataURL(inputFile.files[0]);
        fReader.onloadend = function (event) {
            let img = document.getElementById('bikeImg');
            img.src = event.target.result;
            dbImg = img.src;
        }

    }

    
    // Inventory submiision form
    form.addEventListener('submit', formActions)
    function formActions(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        

        let bike = {};
        formData.forEach((value, key) => {
            
            
            bike[key] = value;
            
        });
        bike['fileName'] = dbImg; // Assigning the image to recovery format
       
        bikes.push(bike);
         
        
        console.log(bikes);
        
        localStorage.setItem('bikes', JSON.stringify(bikes))

    }


})







