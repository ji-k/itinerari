import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItinerary } from '../../store/itineraries';


const CreateHotelForm = ({ setShowModal, itinerary_id }) => {

    const dispatch = useDispatch();

    const [property, setProperty] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hotel = { itinerary_id, property, address, city, state, zipcode, notes }

        const res = await fetch(`/api/hotels/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hotel)
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
                    <div className="modal-title">Add Hotel</div>
                    <div className="flexy">
                        <label className="form-label">
                            Hotel Property
                        </label>
                        <input
                            type="text"
                            value={property}
                            placeholder="Property"
                            className="itinerary-form-input"
                            required
                            onChange={(e) => setProperty(e.target.value)}
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
                        <button type="submit" className="form-button">New Hotel</button>
                    </div>
                </form>
            </div>
        </>
    )
}



export default CreateHotelForm;
