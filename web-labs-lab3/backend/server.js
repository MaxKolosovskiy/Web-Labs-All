
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8082;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

let cars = []; // Example array to store cars

// Create a car (POST method)
app.post('/cars', (req, res) => {
    const newCar = req.body;
    cars.push(newCar);
    res.status(201).json(newCar);
});

// Get all cars (GET method)
app.get('/cars', (req, res) => {
    res.json(cars);
});

// Get car by ID (GET method)
app.get('/cars/:id', (req, res) => {
    const carId = req.params.id;
    const car = cars.find(c => c.id === carId);
    if (car) {
        res.json(car);
    } else {
        res.status(404).send('Car not found');
    }
});

// Update car by ID (PATCH method)
app.patch('/cars/:id', (req, res) => {
    const carId = req.params.id;
    const updatedCarData = req.body;
    const carIndex = cars.findIndex(c => c.id === carId);
    if (carIndex !== -1) {
        cars[carIndex] = { ...cars[carIndex], ...updatedCarData };
        res.json(cars[carIndex]);
    } else {
        res.status(404).send('Car not found');
    }
});

// Delete car by ID (DELETE method)
app.delete('/cars/:id', (req, res) => {
    const carId = req.params.id;
    const carIndex = cars.findIndex(c => c.id === carId);
    if (carIndex !== -1) {
        cars.splice(carIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Car not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
