let cars = JSON.parse(localStorage.getItem('cars')) || [];

function displayCars(carList) {
    const carTableBody = document.getElementById('car-table-body');
    carTableBody.innerHTML = '';

    carList.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${car.model}</td>
            <td>$${(car.price ? car.price.toLocaleString() : 'N/A')}</td>
            <td>${car.year}</td>
            <td>${car.country}</td>
            <td>
                <button onclick="editCar(${car.id})">Edit</button>
                <button onclick="deleteCar(${car.id})">Delete</button>
            </td>
        `;
        carTableBody.appendChild(row);
    });

    document.getElementById('total-cars').textContent = carList.length;
}

window.editCar = (carId) => {
    window.location.href = `edit.html?carId=${carId}`;
};

document.getElementById('sort-by-model').addEventListener('click', () => {
    const sortedCars = [...cars].sort((a, b) => a.model.localeCompare(b.model));
    displayCars(sortedCars);
});

document.getElementById('sort-by-price').addEventListener('click', () => {
    const sortedCars = [...cars].sort((a, b) => a.price - b.price);
    displayCars(sortedCars);
});

document.getElementById('sort-by-year').addEventListener('click', () => {
    const sortedCars = [...cars].sort((a, b) => a.year - b.year);
    displayCars(sortedCars);
});

document.getElementById('sort-by-country').addEventListener('click', () => {
    const sortedCars = [...cars].sort((a, b) => a.country.localeCompare(b.country));
    displayCars(sortedCars);
});

document.getElementById('search').addEventListener('input', (e) => {
    const searchText = e.target.value.trim().toLowerCase();
    const filteredCars = cars.filter(car =>
        car.model.toLowerCase().includes(searchText) ||
        car.price.toString().includes(searchText) ||
        car.year.toString().includes(searchText) ||
        car.country.toLowerCase().includes(searchText)
    );
    displayCars(filteredCars);
});

document.getElementById('create-car-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const priceValue = parseFloat(document.getElementById('price').value);

    if (priceValue < 0) {
        alert('Ціна не може бути від\'ємною!');
        return;
    }

    const newCar = {
        id: cars.length + 1,
        model: document.getElementById('model').value,
        price: priceValue,
        year: parseInt(document.getElementById('year').value),
        country: document.getElementById('country').value,
    };

    cars.push(newCar);
    localStorage.setItem('cars', JSON.stringify(cars));
    displayCars(cars);
    document.getElementById('create-car-form').reset();
});

displayCars(cars);

// CRUD Operations using Fetch API

const apiUrl = 'http://localhost:8082/cars'; // Base URL of the REST API

// CREATE: Add a new car
function createCar(carData) {
    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Created:', data);
        cars.push(data); // Add to local cars array
        displayCars(cars); // Update display
    })
    .catch(error => console.error('Error:', error));
}

// READ: Get all cars
function getCars() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cars = data; // Update local cars array
            displayCars(cars); // Display cars
        })
        .catch(error => console.error('Error:', error));
}

// UPDATE: Update a car by ID
function updateCar(carId, updatedData) {
    fetch(`${apiUrl}/${carId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Updated:', data);
        cars = cars.map(car => car.id === carId ? data : car); // Update local cars array
        displayCars(cars); // Update display
    })
    .catch(error => console.error('Error:', error));
}

// DELETE: Remove a car by ID
function deleteCar(carId) {
    fetch(`${apiUrl}/${carId}`, {
        method: 'DELETE',
    })
    .then(() => {
        console.log('Deleted car with ID:', carId);
        cars = cars.filter(car => car.id !== carId); // Remove from local cars array
        displayCars(cars); // Update display
    })
    .catch(error => console.error('Error:', error));
}
