import './UserPayment.styles.scss';

const UserPayment = ({ totalPriceInBTC }) => {
  return (
    <div className='user-payment'>
      <div className='title'>
        <h2>Plaćanje uspešno !</h2>
      </div>
      <div className='user-img'>
        <img src='https://img.icons8.com/officel/80/000000/checked-user-male.png' alt='user profile' />
      </div>
      <div className='user-amount'>
        <div className='expected-amount'>
          <span>Očekivani iznos</span> <span>{totalPriceInBTC} BTC</span>
        </div>
        <div className='expected-amount'>
          <span>Poslati iznos</span> <span>{totalPriceInBTC} BTC</span>
        </div>
      </div>

      <div className='btn'>
        <a href='../'>Nova transakcija</a>
      </div>
    </div>
  );
};

export default UserPayment;
