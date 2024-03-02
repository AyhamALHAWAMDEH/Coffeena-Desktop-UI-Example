import React from 'react';
import CoffeeCard from './CoffeeCard'; // تأكد من استيراد CoffeeCard
import './CardSection.css'; // استيراد ملف الأسلوب


const coffeeData = [
  { name: "Cappuccino", imagePath: "/images/cappuccino.png", size: "25ml", price: "2.99$" },
  { name: "With cream", imagePath: "/images/with_cream.png", size: "25ml", price: "2.89$" },
  { name: "Espresso", imagePath: "/images/espresso.png", size: "25ml", price: "3.99$" },
  { name: "To go", imagePath: "/images/to_go.png", size: "25ml", price: "3.99$" },
  { name: "Iced latte", imagePath: "/images/iced_late.png", size: "25ml", price: "1.99$" },
  { name: "Irish", imagePath: "/images/irich.png", size: "25ml", price: "2.59$" },
  { name: "Tea", imagePath: "/images/tea.png", size: "25ml", price: "2.99$" },
  { name: "Matcha", imagePath: "/images/matcha.png", size: "25ml", price: "3.49$" },
];

function CardSection() {
  return (
    <div className="coffee-card-container">
      {coffeeData.map((coffee, index) => (
        <CoffeeCard key={index} data={coffee} />
      ))}
    </div>
  );
}

export default CardSection;
