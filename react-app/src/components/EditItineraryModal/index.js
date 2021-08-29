import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import EditItineraryForm from '../Itinerary/EditItineraryForm';

function EditItineraryModal({ itinerary, submittedForm, setSubmittedForm }) {
    const [showModal, setShowModal] = useState(false);



    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditItineraryForm itinerary={itinerary} submittedForm={submittedForm} setSubmittedForm={setSubmittedForm} />
                </Modal>
            )}
        </>
    );
}

export default EditItineraryModal;
