import React, { useRef, useState } from "react";
import "../styles/Billing.css";

const Billing = () => {
  const [priceMonthly, setPriceMonthly] = useState(16);
  const [numberPageviews, setNumberPageviews] = useState("100K");
  const checkRef = useRef();
  const pageviewRef = useRef();

  const priceData = [
    { pageviews: 10000, price: 8 },
    { pageviews: 50000, price: 12 },
    { pageviews: 100000, price: 16 },
    { pageviews: 500000, price: 24 },
    { pageviews: 1000000, price: 36 },
  ];

  function calculatePrice() {
    const value = pageviewRef.current.value;
    const selectedPrice = priceData.find(
      (item) => item.pageviews >= value
    )?.price;
    const discount = checkRef.current?.checked ? 0.25 : 0;
    const monthlyPrice = selectedPrice;
    const yearlyPrice = selectedPrice * 12 * (1 - discount);
    const pageviews = changeNumberToString(value);
    setPriceMonthly(discount === 0 ? monthlyPrice : yearlyPrice);
    setNumberPageviews(pageviews);
  }

  function changeNumberToString(number) {
    let count = 0;
    while (number >= 1000) {
      number /= 1000;
      count += 1;
    }
    if (count === 2) {
      return String(number.toFixed(0)) + "M";
    }
    return String(number.toFixed(0)) + "K";
  }

  return (
    <div className="Billing">
      <div className="top">
        <div className="grid">
          <p className="pageviews">{numberPageviews} PAGEVIEWS</p>
          <input
            className="input-range"
            type="range"
            onChange={calculatePrice}
            list="markers"
            min="10000"
            defaultValue="100000"
            max="1000000"
            ref={pageviewRef}
          />

          <p className="price">
            <span className="big">${priceMonthly.toFixed(2)}</span> /&nbsp;
            {checkRef.current?.checked ? "year" : "month"}
          </p>
        </div>
        <div className="row">
          <p className="month-bill">Monthly Billing</p>
          <div className="toggle">
            <label className="switch">
              <input
                className="checkbox"
                type="checkbox"
                ref={checkRef}
                onChange={calculatePrice}
              />
              <span className="slider"></span>
            </label>
          </div>
          <p className="year-bill">
            Yearly Billing
            <span className="discount">
              -25% <span className="addition">discount</span>
            </span>
          </p>
        </div>
      </div>
      <div className="bottom">
        <ul className="lists">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button className="btn">Start my trial</button>
      </div>
    </div>
  );
};

export default Billing;
