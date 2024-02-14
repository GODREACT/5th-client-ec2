import React from 'react';
import './stocks.css';
import { API_URL } from '../../../../config/config';


export default function Stocks() {

  return(
    <div id="stocks-box">
      <div className="stocks-top-box">
        <img src={API_URL + "/main/coin01.png"} alt="img" />
      </div>
      <div className="stocks-top-box">
        <img src={API_URL + "/main/coin02.png"} alt="img" />
      </div>
      <div className="stocks-bottom-box">
        <span className='stock-bottom-text'>BitCoin</span>
        <p>비트코인</p>
      </div>
      <div className="stocks-bottom-box">
        <span className='stock-bottom-text'>Ethereum</span>
        <p>이더리움</p>
      </div>
    </div>
  );
}