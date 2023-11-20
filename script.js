let parkingLot = document.getElementById('parking-lot');

function parkCar() {
    let car = document.createElement('div');
    car.className = 'car';
    car.style.left = Math.random() * (parkingLot.offsetWidth - 50) + 'px';
    parkingLot.appendChild(car);
}

function removeCar() {
    let cars = parkingLot.getElementsByClassName('car');
    if (cars.length > 0) {
        parkingLot.removeChild(cars[cars.length - 1]);
    }
}
