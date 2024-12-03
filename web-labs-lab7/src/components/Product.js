import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ViewMoreButton from './ViewMoreButton';
import '../styles/Product.css';
import m340 from '../images/11 (2).jpg';
import cls63 from '../images/CLS-63.jpg';
import f10 from '../images/f10.jpg';
import f30 from '../images/F30.jpg';
import g63 from '../images/G63.jpg';
import ix2 from '../images/IX2.jpg';
import m4 from '../images/M4.jpg';
import m5g60 from '../images/M5-g60.jpg';


const cars = [
  {
    id: 1,
    image: cls63,
    name: 'Mercedes CLS63',
    description: 'Stage 3, 1120hp. Powerful coupe combining comfort and speed, perfect for any drive.',
  },
  {
    id: 2,
    image: f10,
    name: 'BMW F10-m5look',
    description: 'Luxury sedan with advanced tech and elegant design for work or leisure.',
  },
  {
    id: 3,
    image: f30,
    name: 'BMW F30',
    description: 'Sport sedan, Stage 1 with straight-pipe exhaust for dynamic performance and unique sound.',
  },
  {
    id: 4,
    image: m340,
    name: 'BMW G20(FL)',
    description: 'Stage 2, 550+hp. Modern sedan with sleek design and thrilling acceleration.',
  },
  {
    id: 5,
    image: g63,
    name: 'Mercedes G63',
    description: 'A luxurious SUV with a 5.5L engine, offering unmatched off-road capabilities and iconic design.',
  },
  {
    id: 6,
    image: ix2,
    name: 'BMW Tesla',
    description: 'A cutting-edge electric SUV that blends futuristic innovation with premium comfort and luxury.',
  },
  {
    id: 7,
    image: m4,
    name: 'BMW M4',
    description: 'A high-performance coupe with a sleek aerodynamic design, advanced technology.',
  },
  {
    id: 8,
    image: m5g60,
    name: 'BMW M5G60',
    description: 'A supercar with precision handling, and a bold, sporty appearance.',
  },
];

const Products = () => {
  const [showAll, setShowAll] = useState(false); // Додаємо стан для показу всіх машин

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  return (
      <div className="product-wrapper">
        <h2>
          <span className="underline-light_blue">Our VIP Cars</span>
        </h2>
        <div className="product-div">
          <div className="flex-row">
            {cars
                .slice(0, showAll ? cars.length : 4)
                .map((car) => (
                    <ProductItem key={car.id} image={car.image} name={car.name} description={car.description} />
                ))}
          </div>
        </div>
        <ViewMoreButton onClick={handleViewMore} text={showAll ? 'Less' : 'View more'} />
      </div>
  );
};

export default Products;
