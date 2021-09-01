import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateFlightForm from '../Flight/CreateFlightForm';

function CreateFlightModal() {
    const [showModal, setShowModal] = useState(false);
    // const [formHidden, setFormHidden] = useState(true)

    return (
        <>
            <button onClick={() => setShowModal(true)} >Add Flight</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateFlightForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateFlightModal;
