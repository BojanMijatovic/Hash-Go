import './QrCustomerCode.styles.scss';
import { useEffect, useState } from 'react';
import QrCode from 'qrcode';
import ClipLoader from 'react-spinners/ClipLoader';
import UserPayment from '../UserPayment/UserPayment';

const QrCustomerCode = ({ terminalValue, bitcoinPrice }) => {
  const [qrCode, setQrCode] = useState('');
  const [totalPriceInBTC, setTotalPriceInBTC] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);

  useEffect(() => {
    QrCode.toDataURL(terminalValue).then(setQrCode);
    // wait for calculate the total price in BTC

    const interval = setInterval(() => {
      setTotalPriceInBTC(terminalValue / bitcoinPrice);
    }, 500);
    return () => clearInterval(interval);
  }, [terminalValue, bitcoinPrice]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaymentStatus(true);
    }, 2000);
  }, []);

  const cancelLoading = () => {
    setLoading(false);
  };

  return (
    <section className='section'>
      {paymentStatus ? (
        <UserPayment />
      ) : (
        <>
          <h2 className='title'>Scan QR code</h2>
          <div className='qrcode'>
            <img src={qrCode} alt='qrcode' />
          </div>
          <div className='text-content'>
            <p className='wallet'>loremIpsumDolo231ons1ecteturRqewqeqws123</p>
            <div className='terminal-amount'>
              <div className='bill'>
                <span>Your bill:</span> <span>{terminalValue} DIN</span>
              </div>
              <div className='bill'>
                <span>Bitcoin price:</span> <span>{bitcoinPrice} DIN</span>
              </div>
            </div>
          </div>
          <div className='loading'>{loading ? <ClipLoader loading={loading} size={80} color={`#F5A623`} /> : ''}</div>
          <div className='total-priceInBitcoin'>
            <p className='total-bill'>Total price in Bitcoin: {totalPriceInBTC} BTC</p>
          </div>
          <div className='btnContainer'>
            <button className='btn' onClick={cancelLoading}>
              Cancel
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default QrCustomerCode;
