import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css'; // تأكد من استيراد App.css
import CardSection from './CardSection'; // استيراد CardSection
import BillSection from './BillSection';

function App () {
  return (
    //نقوم بإنشاء قسمين للشاشة الرئيسية الأول للقسم البني على اليمين والثاني بيج على اليسار
    <div className="App">
      <div className="left-section">
        <div className="left-inner-container">

          <h1 className="main-title">Welcome to Coffeena</h1>
          <p className="sub-title">Choose your favorite coffee as you like!</p>
          <CardSection />

        </div>
      </div>
      <div className="right-section">
        <div className="right-inner-container">
        <BillSection/>
        </div>
      </div>
    </div>
  );
}

export default App;

