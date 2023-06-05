import React from "react"
import { Modal, Button } from "react-bootstrap"

export default function CustomModal(props) {
    const {show, handleClose} = props
    
        return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Information Received</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Thank you for requesting to reserve this vehicle.  Pablo's Vehicles will contact you to schedule a test drive.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>OK</Button>
                
            </Modal.Footer>
        </Modal>
    )
}



