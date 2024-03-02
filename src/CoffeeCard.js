import React, { useState } from 'react';
import './CoffeeCard.css'; // تأكد من إنشاء هذا الملف واستيراده


function CoffeeCard({ data }) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity - 1 < 0 ? 0 : prevQuantity - 1);
  };

  return (
    <div className="coffee-card">
  <div className="image-section" style={{ backgroundColor: '#967259' }}>
    <img src={data.imagePath} alt={data.name} className="coffee-image" />
  </div>
  <div className="text-section" style={{ backgroundColor: '#DBC1AC' }}>
    <h3 className="coffee-name">{data.name}</h3>
    <p className="coffee-size">{data.size}</p>
    <div className="price-section">
    <div className="quantity-section">
        <img src="/images/minus.png" alt="minus" className="minus-icon" onClick={decreaseQuantity} />
        <span className="quantity">{quantity}</span>
        <img src="/images/plus.png" alt="plus" className="plus-icon" onClick={increaseQuantity} />
      </div>
      <span className="price">{data.price}</span>
    </div>
  </div>
</div>

  );
}

export default CoffeeCard;

