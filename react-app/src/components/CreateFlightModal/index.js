import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateFlightForm from '../Flight/CreateFlightForm';

function CreateFlightModal({ itinerary_id }) {
    const [showModal, setShowModal] = useState(false);
    // const [formHidden, setFormHidden] = useState(true)

    return (
        <>
            <button onClick={() => setShowModal(true)} className="dashboard-button" >Add Flight</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateFlightForm setShowModal={setShowModal} itinerary_id={itinerary_id} />
                </Modal>
            )}
        </>
    );
}

export default CreateFlightModal;
