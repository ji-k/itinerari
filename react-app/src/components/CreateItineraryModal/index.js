import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ItineraryForm from '../Itinerary/ItineraryForm';

function CreateItineraryModal({ submittedForm, setSubmittedForm }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Create</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ItineraryForm submittedForm={submittedForm} setSubmittedForm={setSubmittedForm} />
                </Modal>
            )}
        </>
    );
}

export default CreateItineraryModal;
