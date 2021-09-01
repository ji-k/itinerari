import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import EditItineraryForm from '../Itinerary/EditItineraryForm';

function EditItineraryModal({ itinerary }) {
    const [showModal, setShowModal] = useState(false);
    // const [reloader, setReloader] = useState(true)



    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit General Information</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditItineraryForm itinerary={itinerary} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditItineraryModal;
