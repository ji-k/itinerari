import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateHotelForm from '../Hotel/CreateHotelForm';

function CreateHotelModal({ itinerary_id }) { // take out parameteR?
    const [showModal, setShowModal] = useState(false);
    // const [formHidden, setFormHidden] = useState(true)

    return (
        <>
            <button onClick={() => setShowModal(true)} className="dashboard-button" >Add Hotel</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateHotelForm setShowModal={setShowModal} itinerary_id={itinerary_id} />
                </Modal>
            )}
        </>
    );
}

export default CreateHotelModal;
