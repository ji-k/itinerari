import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateItineraryForm from '../Itinerary/CreateItineraryForm';

function CreateItineraryModal() {
    const [showModal, setShowModal] = useState(false);
    // const [formHidden, setFormHidden] = useState(true)

    return (
        <>
            <button onClick={() => setShowModal(true)} className="dashboard-button">Create New Itinerary</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateItineraryForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateItineraryModal;
