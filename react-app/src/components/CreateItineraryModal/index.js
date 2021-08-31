import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ItineraryForm from '../Itinerary/ItineraryForm';

function CreateItineraryModal() {
    const [showModal, setShowModal] = useState(false);
    // const [formHidden, setFormHidden] = useState(true)

    return (
        <>
            <button onClick={() => setShowModal(true)} >Create</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ItineraryForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateItineraryModal;
