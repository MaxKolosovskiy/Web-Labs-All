import React, { useState } from "react";
import "../styles/Catalog.css";
import CatalogItem from "./CatalogItem";
import CatalogSort from "./CatalogSort";
import cls63 from "../images/CLS-63.jpg";
import f10 from "../images/f10.jpg";
import f30 from "../images/F30.jpg";
import m340 from "../images/11 (2).jpg";
import g63 from "../images/G63.jpg";
import ix2 from "../images/IX2.jpg";
import m4 from "../images/M4.jpg";
import m5g60 from "../images/M5-g60.jpg";

const carsData = [
  {
    id: 1,
    image: cls63,
    name: 'Mercedes CLS63',
    description: 'Stage 3, 1120hp. Powerful coupe combining comfort and speed, perfect for any drive.',
    price: 30000,
  },
  {
    id: 2,
    image: f10,
    name: 'BMW F10-m5look',
    description: 'Luxury sedan with advanced tech and elegant design for work or leisure.',
    price: 19000,
  },
  {
    id: 3,
    image: f30,
    name: 'BMW F30',
    description: 'Sport sedan, Stage 1 with straight-pipe exhaust for dynamic performance and unique sound.',
    price: 17000,
  },
  {
    id: 4,
    image: m340,
    name: 'BMW G20(FL)',
    description: 'Stage 2, 550+hp. Modern sedan with sleek design and thrilling acceleration.',
    price: 65000,
  },
  {
    id: 5,
    image: g63,
    name: 'Mercedes G63',
    description: 'A luxurious SUV with a 5.5L engine, offering unmatched off-road capabilities and iconic design. Perfect for adventures and urban cruising.',
    price: 170000,
  },
  {
    id: 6,
    image: ix2,
    name: 'BMW Tesla',
    description: 'A cutting-edge electric SUV that blends futuristic innovation with premium comfort and luxury. Ideal for eco-conscious drivers.',
    price: 80000,
  },
  {
    id: 7,
    image: m4,
    name: 'BMW M4',
    description: 'A high-performance coupe with a sleek aerodynamic design, advanced technology, and dynamic driving capabilities.',
    price: 160000,
  },
  {
    id: 8,
    image: m5g60,
    name: 'BMW M5G60',
    description: 'A supercar with extraordinary speed, precision handling, and a bold, sporty appearance. Built for adrenaline seekers.',
    price: 230000,
  },
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleSortChange = (event) => setSortType(event.target.value);

  // Опції сорт
  const sortOptions = [
    { value: "default", label: "Sort by Price" },
    { value: "asc", label: "Price: Low to High" },
    { value: "desc", label: "Price: High to Low" },
  ];

  const filteredCars = carsData
    .filter(
      (car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "asc") return a.price - b.price;
      if (sortType === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="catalog-wrapper">
      <h1 className="catalog-title">Vip Cars Catalog</h1>

      <div className="catalog-filters">
        <input
          type="text"
          placeholder="Search by name or description"
          value={searchTerm}
          onChange={handleSearchChange}
          className="catalog-search"
        />
        <CatalogSort
          sortType={sortType}
          onSortChange={handleSortChange}
          sortOptions={sortOptions} //сорту через пропси
        />
      </div>

      <div className="cars-grid">
        {filteredCars.map((car) => (
          <CatalogItem
            key={car.id}
            image={car.image}
            name={car.name}
            description={car.description}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
