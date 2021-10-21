import { useState } from 'react';
import axios from 'axios';
import './Terminal.styles.scss';
import QrCustomerCode from '../QrCode/QrCustomerCode';

const Terminal = ({ handleLogOut, email }) => {
  const [value, setValue] = useState('');
  const [showTerminal, setShowTerminal] = useState(true);
  const [bitcoinPrice, setBitcoinPrice] = useState(0);

  const name = email.split('@')[0];

  const updateValue = (e) => {
    setValue(value + e);
  };

  const showBitcoinPrice = async () => {
    const response = await axios.get(
      'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCRSD',
      {
        headers: {
          'x-rapidapi-host': 'bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com',
          'x-rapidapi-key': '3d7b8e731fmsh2951c6fedb466ffp1a2e60jsn8cd6cebaf653',
        },
      }
    );
    setBitcoinPrice(response.data.last);
  };

  const testFunction = () => {
    showBitcoinPrice();
    setShowTerminal(false);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateValue(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <section className='terminal'>
      <nav className='nav'>
        <h2 className='username'>Dobrodošao {name}</h2>
        <button className='btn' onClick={handleLogOut}>
          Odjavi se
        </button>
      </nav>
      {showTerminal ? (
        <div className='container'>
          <div className='display-amount'>{value ? value : 0}</div>

          <div className='digits'>
            {createDigits()}
            <button className='digit' onClick={() => updateValue(0)}>
              0
            </button>

            <button className='operator' disabled={true}>
              <img src='https://img.icons8.com/color/48/000000/bitcoin--v1.png' alt='bitcoin' />
            </button>
            <button className='operator' onClick={() => setValue('')}>
              CE
            </button>
          </div>

          <div className='btnContainer'>
            <button className='btn' onClick={() => testFunction()}>
              PLATI
            </button>
          </div>
        </div>
      ) : (
        <QrCustomerCode terminalValue={value} bitcoinPrice={bitcoinPrice} />
      )}
    </section>
  );
};

export default Terminal;
