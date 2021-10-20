import './UserPayment.styles.scss';

const UserPayment = () => {
  return (
    <div className='user-payment'>
      <div className='title'>
        <h2>Payment complete</h2>
      </div>
      <div className='user-img'>
        <img src='https://img.icons8.com/officel/80/000000/checked-user-male.png' />
      </div>
      <div className='user-amount'>
        <div className='expected-amount'>
          <span>Expected amount</span> <span>415465 BTC</span>
        </div>
        <div className='expected-amount'>
          <span>Sended amount</span> <span>415465 BTC</span>
        </div>
      </div>
      <div className='btn'>
        <button>New Transaction</button>
      </div>
    </div>
  );
};

export default UserPayment;
