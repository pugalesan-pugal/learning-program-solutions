import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = 0.011; // 1 INR = 0.011 Euro (example rate)
    const result = rupees * rate;
    setEuro(result.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={handleChange}
          placeholder="Enter INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euro !== null && <p>{rupees} INR = {euro} EUR</p>}
    </div>
  );
};

export default CurrencyConvertor;
