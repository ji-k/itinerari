import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItinerary } from '../../store/itineraries';


const CreateFlightForm = ({ setShowModal, itinerary_id }) => {

    const dispatch = useDispatch();

    const [date, setDate] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [airline, setAirline] = useState('')
    const [flight_no, setFlight_no] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const flight = { itinerary_id, date, origin, destination, departure, arrival, airline, flight_no, notes }

        const res = await fetch(`/api/flights/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(flight)
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
                    <div className="modal-title">Add Flight</div>
                    <div className="flexy">
                        <label className="form-label">
                            Date of Travel
                        </label>
                        <input
                            type="date"
                            value={date}
                            placeholder="Trip Date"
                            className="itinerary-form-input"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Origin (Airport)
                        </label>
                        <input
                            type="string"
                            value={origin}
                            placeholder="Origin"
                            className="itinerary-form-input"
                            onChange={(e) => setOrigin(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Destination (Airport)
                        </label>
                        <input
                            type="string"
                            value={destination}
                            placeholder="Destination"
                            className="itinerary-form-input"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Departure Time
                        </label>
                        <input
                            type="time"
                            value={departure}
                            placeholder="Departure"
                            className="itinerary-form-input"
                            onChange={(e) => setDeparture(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Arrival Time
                        </label>
                        <input
                            type="time"
                            value={arrival}
                            placeholder="Arrival"
                            className="itinerary-form-input"
                            onChange={(e) => setArrival(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Airline
                        </label>
                        <input
                            type="string"
                            value={airline}
                            placeholder="Airline"
                            className="itinerary-form-input"
                            onChange={(e) => setAirline(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Flight Number
                        </label>
                        <input
                            type="string"
                            value={flight_no}
                            placeholder="Flight No."
                            className="itinerary-form-input"
                            onChange={(e) => setFlight_no(e.target.value)}
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
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <div className="form-button-div">
                        <button type="submit" className="form-button">New Flight</button>
                    </div>
                </form>
            </div>
        </>
    )
}



export default CreateFlightForm;
