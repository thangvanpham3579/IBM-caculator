import React, { useState } from 'react';
import './BMIForm.css';

function BMIForm() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Đánh giá BMI
      if (bmiValue < 18.5) {
        setMessage('Thiếu cân');
      } else if (bmiValue < 24.9) {
        setMessage('Bình thường');
      } else if (bmiValue < 29.9) {
        setMessage('Thừa cân');
      } else {
        setMessage('Béo phì');
      }
    } else {
      alert('Vui lòng nhập đầy đủ chiều cao và cân nặng!');
    }
  };

  return (
    <div className="bmi-form">
      <div className="input-group">
        <p style={{ color: 'black' }}>Vui lòng nhập cân nặng của bạn: </p>
        <label>Cân nặng (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Nhập cân nặng"
          min ="0"
        />
      </div>
      <div className="input-group">
        <p style={{ color: 'black' }}>Vui lòng nhập chiều cao của bạn: </p>
        <label>Chiều cao (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Nhập chiều cao"
          min ="0"
        />
      </div>
      <button onClick={calculateBMI}>Tính BMI</button>
      {bmi && (
        <div className="result">
          <p>Chỉ số BMI của bạn: <strong>{bmi}</strong></p>
          <p>Đánh giá: <strong>{message}</strong></p>
        </div>
      )}
    </div>
  );
}

export default BMIForm;
