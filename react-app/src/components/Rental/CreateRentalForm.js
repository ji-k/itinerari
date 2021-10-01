import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItinerary } from '../../store/itineraries';


const CreateRentalForm = ({ setShowModal, itinerary_id }) => {

    const dispatch = useDispatch();

    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [pickup_date, setPickup_date] = useState('');
    const [dropoff_date, setDropoff_date] = useState('');
    const [pickup_time, setPickup_time] = useState('')
    const [dropoff_time, setDropoff_time] = useState('')
    const [confirmation, setConfirmation] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rental = { itinerary_id, company, address, city, state, zipcode, pickup_date, dropoff_date, pickup_time, dropoff_time, confirmation, notes }

        const res = await fetch(`/api/rentals/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rental)
        });
        if (res.ok) {
            await res.json();

            await dispatch(getItinerary(itinerary_id));

            setShowModal(false)
            return 'success';
        }
    };

    return (
        <>
            <div className="flight-form__container itinerary-form__container">
                <form className="flight-form itinerary-form" onSubmit={handleSubmit}>
                    <div className="modal-title">Add Rental Car</div>
                    <div className="flexy">
                        <label className="form-label">
                            Rental Car Company
                        </label>
                        <input
                            type="text"
                            value={company}
                            placeholder="Company"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            value={address}
                            placeholder="Address"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            value={city}
                            placeholder="City"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            State
                        </label>
                        <input
                            type="text"
                            value={state}
                            placeholder="State"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Zipcode
                        </label>
                        <input
                            type="number"
                            value={zipcode}
                            placeholder="Zipcode"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Pickup Date
                        </label>
                        <input
                            type="date"
                            value={pickup_date}
                            placeholder="Pickup date"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setPickup_date(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Drop Off Date
                        </label>
                        <input
                            type="date"
                            value={dropoff_date}
                            placeholder="Pickup date"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setDropoff_date(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Pickup Time
                        </label>
                        <input
                            type="time"
                            value={pickup_time}
                            placeholder="Pickup time"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setPickup_time(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Dropoff Time
                        </label>
                        <input
                            type="time"
                            value={dropoff_time}
                            placeholder="Dropoff time"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setDropoff_time(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Confirmation
                        </label>
                        <input
                            type="text"
                            value={confirmation}
                            placeholder="Confirmation"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setConfirmation(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Notes
                        </label>
                        <input
                            type="text"
                            value={notes}
                            placeholder="Notes"
                            className="itinerary-form-input"
                            maxLength="250"
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <div className="form-button-div">
                        <button type="submit" className="form-button">New Rental Car</button>
                    </div>
                </form>
            </div>
        </>
    )
}



export default CreateRentalForm;
