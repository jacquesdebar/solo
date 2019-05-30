import React from 'react';
import Img from './Img'
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';


export default class Resume extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="mx-auto mt-4">
        <button id="resumeButton" className="px-3 py-2" onClick={this.onOpenModal}>Résumé</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Img src="/resume3.png" alt="me" className="" style={{}} />
        </Modal>
      </div>
    );
  }
}
