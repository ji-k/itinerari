import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ItineraryForm from '../Itinerary/ItineraryForm';

function CreateItineraryModal({ handleHide, submittedForm, setSubmittedForm }) {
    const [showModal, setShowModal] = useState(false);
    const [formHidden, setFormHidden] = useState(true)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Create</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ItineraryForm handleHide={setFormHidden} submittedForm={submittedForm} setSubmittedForm={setSubmittedForm} />
                </Modal>
            )}
        </>
    );
}

export default CreateItineraryModal;
