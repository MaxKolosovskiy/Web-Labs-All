async function fetchAllCars() {
    try {
        const response = await fetch('http://localhost:8082/cars');
        if (!response.ok) {
            throw new Error('Failed to fetch cars');
        }
        const cars = await response.json();
        displayCars(cars);
    } catch (error) {
        console.error(error);
    }
}

async function fetchCarById(carId) {
    try {
        const response = await fetch(`http://localhost:8082/cars/${carId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch car');
        }
        const car = await response.json();
        console.log(car);
    } catch (error) {
        console.error(error);
    }
}

async function updateCar(carId, updatedCar) {
    try {
        const response = await fetch(`http://localhost:8082/cars/${carId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCar),
        });

        if (!response.ok) {
            throw new Error('Failed to update car');
        }

        const updatedCarData = await response.json();
        console.log('Car updated successfully:', updatedCarData);
    } catch (error) {
        console.error(error);
    }
}

async function deleteCar(carId) {
    try {
        const response = await fetch(`http://localhost:8082/cars/${carId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete car');
        }

        console.log(`Car with ID ${carId} deleted successfully`);

        // Видалити рядок автомобіля з таблиці на фронтенді
        const carRow = document.querySelector(`[data-car-id="${carId}"]`).closest('tr');
        if (carRow) {
            carRow.remove();
        }
    } catch (error) {
        console.error('Помилка при видаленні автомобіля:', error);
    }
}

fetchAllCars();


// Create a new car (POST method)
async function createCar(newCar) {
    try {
        const response = await fetch('http://localhost:8082/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCar),
        });

        if (!response.ok) {
            throw new Error('Failed to create car');
        }

        const car = await response.json();
        console.log('Car created:', car);
    } catch (error) {
        console.error(error);
    }
}

// Delete a car (DELETE method)
async function deleteCar(carId) {
    try {
        const response = await fetch(`http://localhost:8082/cars/${carId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete car');
        }

        console.log(`Car with ID ${carId} deleted successfully`);
    } catch (error) {
        console.error(error);
    }
}
