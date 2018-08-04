import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app'); 

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.isSelected}
      contentLabel='Selected Options'
      onRequestClose={props.handleModal}
    >
      <h2>Selected Options</h2>
      {props.isSelected && <p>{props.isSelected}</p>}
      <button onClick={props.handleModal}>Okay</button>
    </Modal>
  )
}

export default OptionModal;
