import { useState } from 'react';
import './Terminal.styles.scss';
import QrCustomerCode from '../QrCode/QrCustomerCode';

const Terminal = ({ handleLogOut, email }) => {
  const [value, setValue] = useState('');
  const [showTerminal, setShowTerminal] = useState(true);

  const name = email.split('@')[0];

  const updateValue = (e) => {
    setValue(value + e);
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
        <h2 className='username'>Welcome {name}</h2>
        <button className='btn' onClick={handleLogOut}>
          Logout
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
              BITCoin
            </button>
            <button className='operator' onClick={() => setValue('')}>
              CE
            </button>
          </div>

          <div className='btnContainer'>
            <button className='btn' onClick={() => setShowTerminal(false)}>
              pay
            </button>
          </div>
        </div>
      ) : (
        <QrCustomerCode terminalValue={value} />
      )}
    </section>
  );
};

export default Terminal;
