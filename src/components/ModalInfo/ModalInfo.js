import { useState } from 'react';
import './ModalInfo.styles.scss';

const ModalInfo = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className='btn-modal' onClick={toggleModal}>
        <img src='https://img.icons8.com/fluency/48/000000/info-squared.png' />
        Uputstvo
      </button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}>
            <div className='modal-content'>
              <h2>Uputstvo za korišćenje</h2>
              <p>
                Ukoliko nemate nalog na <strong>HASH&GO</strong> aplikaciji, potrebno je da se registrujete popunjavanjem forme
                prikazane na ekranu. Nakon registracije sledi prijava na aplikaciju unosom vaših podataka (forma za prijavu će se
                automatski prikazati nakon registracije). <br />
                Nakon prijave, bićete prosleđeni na stranicu za unos iznosa za plaćanje u RSD korišćenjem prikazane tastature.
                Klikom na taster <strong>PLATI</strong> bićete prosleđeni na stranicu gde će biti prikazan ukupan iznos u RSD i
                BTC, kao i QR kod za skeniranje. U svakom trenutku možete odustati klikom na taster <strong>ODUSTANI</strong>.
                <br />
                Nakon izvršene transakcije dobićete obaveštenje i imaćete mogućnost unosa nove transakcije klikom na taster{' '}
                <strong>NOVA TRANSAKCIJA</strong>
              </p>
            </div>
            <button className='close-modal' onClick={toggleModal}>
              <img src='https://img.icons8.com/fluency/48/000000/close-pane.png' />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalInfo;
