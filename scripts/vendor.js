// DOM consts
const form = document.getElementById('car-selection-form');
const carAge = document.getElementById('car-selection-age');
const carType = document.getElementById('car-selection-type');
const submit = document.getElementById('btn-submit');

const carList = document.getElementById('car-list');

const favoritesList = document.getElementById('favorites-list');

// DOM event listeners
form.addEventListener('submit', function(event){funcFindCars(event, carAge.value, carType.value)})

// list of cars 
let cars = [
    {name: '2022 Audi', age: 'used', type: 'car', favorite: false, pic: 'pictures/used/cars/Audi_2022.jpg' },
    {name: '2020 BMW', age: 'used', type: 'car', favorite: false, pic: 'pictures/used/cars/BMW_2020.jpg'},
    {name: '2020 Lexus', age: 'used', type: 'car', favorite: false, pic: 'pictures/used/cars/Lexus_2020.jpg'},
    {name: '2016 BMW', age: 'used', type: 'motorcycle', favorite: false, pic: 'pictures/used/motorcyles/BMW_2016.jpg'},
    {name: '2022 Kawasaki', age: 'used', type: 'motorcycle', favorite: false, pic: 'pictures/used/motorcyles/Kawasaki_2022.jpg'},
    {name: '2013 Yamaha', age: 'used', type: 'motorcycle', favorite: false, pic: 'pictures/used/motorcyles/Yamaha_2013.jpg'},
    {name: '2022 Chevy', age: 'used', type: 'truck', favorite: false, pic: 'pictures/used/trucks/Chevy_2022.jpeg'},
    {name: '2007 Dodge', age: 'used', type: 'truck', favorite: false, pic: 'pictures/used/trucks/Dodge_2007.jpg'},
    {name: '2021 Ford', age: 'used', type: 'truck', favorite: false, pic: 'pictures/used/trucks/Ford_2021.jpg'},
    {name: '2023 Jeep', age: 'new', type: 'car', favorite: false, pic: 'pictures/new/cars/Jeep_2023.jpg'},
    {name: '2023 Mazda', age: 'new', type: 'car', favorite: false, pic: 'pictures/new/cars/Mazda_2023.jpg'},
    {name: '2023 Mercedes', age: 'new', type: 'car', favorite: false, pic: 'pictures/new/cars/Mercedes_2023.jpg'},
    {name: '2022 Ducati', age: 'new', type: 'motorcycle', favorite: false, pic: 'pictures/new/motorcyles/Ducati_2022.jpg'},
    {name: '2022 Harley', age: 'new', type: 'motorcycle', favorite: false, pic: 'pictures/new/motorcyles/Harley_2022.jpg'},
    {name: '2023 Honda', age: 'new', type: 'motorcycle', favorite: false, pic: 'pictures/new/motorcyles/Honda_2023.jpg'},
    {name: '2022 Ford', age: 'new', type: 'truck', favorite: false, pic: 'pictures/new/trucks/Ford_2022.jpg'},
    {name: '2023 Honda', age: 'new', type: 'truck', favorite: false, pic: 'pictures/new/trucks/Honda_2023.jpg'},
    {name: '2023 Toyota', age: 'new', type: 'truck', favorite: false, pic: 'pictures/new/trucks/Toyota_2023.jpg'},
];