import React from 'react'
import { Modal } from 'react-bootstrap'

const TwoFactorAuthSetup = ({ show, handleClose, qrCode }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Two Factor Auth Setup</Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex flex-column align-items-center'>
        <h5>Scan this QR code with Google Authenticator.</h5>
        <img src={qrCode} />
      </Modal.Body>

    </Modal>
  )
}

export default TwoFactorAuthSetup