import React from 'react';
import { Modal } from 'react-bootstrap';
const LoginModal = (props) => {

    return (
        <div className="Modal-bg">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>



                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </div>
    );
};

export default LoginModal;