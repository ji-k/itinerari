import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateRentalForm from '../Rental/CreateRentalForm';

function CreateRentalModal({ itinerary_id }) { // take out parameteR?
    const [showModal, setShowModal] = useState(false);
    // const [formHidden, setFormHidden] = useState(true)

    return (
        <>
            <button onClick={() => setShowModal(true)} className="dashboard-button" >Add Rental Car</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateRentalForm setShowModal={setShowModal} itinerary_id={itinerary_id} />
                </Modal>
            )}
        </>
    );
}

export default CreateRentalModal;
