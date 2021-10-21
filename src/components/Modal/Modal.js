import { useState } from 'react';
import './Modal.styles.scss';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  // <img src="https://img.icons8.com/material-outlined/50/000000/info.png"/>
  // <button><img src="./img/google.png" alt="my image" onClick={this.myfunction} /></button>

  return (
    <>
      <button className='btn-modal' onClick={toggleModal}>
        <img src='https://img.icons8.com/fluency/48/000000/info-squared.png' />
        info
      </button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}>
            <div className='modal-content'>
              <h2>Hello modal</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi quos libero a repudiandae unde consequatur,
                blanditiis voluptatem quidem dicta? Hic commodi laboriosam recusandae ipsum obcaecati aliquid ipsam eum labore.
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

export default Modal;
