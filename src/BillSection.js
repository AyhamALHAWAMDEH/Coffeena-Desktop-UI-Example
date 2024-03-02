import React from 'react';
import './BillSection.css'; // يجب إنشاء ملف CSS بهذا الاسم

function BillSection() {
  // نموذج بيانات للأصناف لأغراض التوضيح
  const items = [
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 1 },
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 2 },
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 3 },
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 4 },
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 5 },
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 6 },
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 7 },
    { name: 'Cappuccino', qty: 1, total: 2.99, id: 8 }

  ];

  // حساب المجاميع
  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * 0.1; // مثلاً 10% ضريبة
  const total = subtotal + tax;

  return (
    <div className="bill-section">
      <h1 className="bill-text">Bill</h1>
      <div className="bill-header">
        <span className="article-width">Article</span>
        <span className="qty-width">QTY</span>
        <span className="total-width">Total A</span>
        <span className="delete-button">Delete</span>
      </div>
      <hr />
      {items.map((item) => (
        <div key={item.id} className="bill-item">
          <span className="article-width">{item.name}</span>
          <span className="qty-width">{item.qty}</span>
          <span className="total-width">{item.total.toFixed(2)} $</span>
          <button className="delete-button">🗑️</button>
        </div>
      ))}
      <hr />
      <div className="bill-totals">
        <span className="calc-width">Subtotal</span>
        <span className="total-width">{subtotal.toFixed(2)} $</span>
      </div>
      <div className="bill-totals">
        <span className="calc-width">Tax</span>
        <span className="total-width">{tax.toFixed(2)} $</span>
      </div>
      <hr />
      <div className="bill-totals">
        <span className="calc-width">Total</span>
        <span className="total-width">{total.toFixed(2)} $</span>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default BillSection;
