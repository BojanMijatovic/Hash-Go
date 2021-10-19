import './QrCustomerCode.styles.scss';
import { useEffect, useState } from 'react';
import QrCode from 'qrcode';

const QrCustomerCode = ({ terminalValue }) => {
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    QrCode.toDataURL(terminalValue).then(setQrCode);
  }, []);

  return (
    <section className='section'>
      <h2 className='title'>Scan QR code</h2>
      <div className='qrcode'>
        <img src={qrCode} alt='qrcode' />
      </div>
      <div className='text-content'>
        <p className='wallet'>loremIpsumDolo231ons1ecteturRqewqeqws123</p>
        <div className='terminal-amount'>
          <div className='bill'>
            <span>Terminal amount:</span> <span>15151353 $</span>
          </div>
          <div className='bill'>
            <span>Terminal amount:</span> <span>15151353 $</span>
          </div>
        </div>
      </div>
      <div className='loading'>loading....</div>
      <div className='total-priceInBitcoin'>
        <p className='total-bill'>Total price in Bitcoin</p>
      </div>
      <div className='btnContainer'>
        <button className='btn'>Cancel</button>
      </div>
    </section>
  );
};

export default QrCustomerCode;
