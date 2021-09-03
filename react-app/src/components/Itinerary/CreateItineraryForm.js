import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postItinerary } from '../../store/itineraries';
import './ItineraryForm.css'



const CreateItineraryForm = ({ setShowModal }) => {
    const owner_id = useSelector(state => state.session.user.id)

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [image_url, setImage_url] = useState('https://itinerari.s3.amazonaws.com/6.jpg');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const itinerary = { title, start_date, end_date, owner_id, image_url, notes }
        const success = await dispatch(postItinerary(itinerary));

        if (success) {
            setShowModal(false)
        }
    };

    return (
        <>
            <div className="itinerary-form__container">
                <form className="itinerary-form" onSubmit={handleSubmit}>
                    <div className="modal-title">Create New Itinerary</div>
                    <div className="flexy">
                        <label className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            placeholder="Bon Voyage!"
                            className="itinerary-form-input"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={start_date}
                            className="itinerary-form-input"
                            onChange={(e) => setStart_date(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            End Date
                        </label>
                        <input type="date"
                            value={end_date}
                            className="itinerary-form-input"
                            onChange={(e) => setEnd_date(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Upload an Cover
                        </label>
                        <input
                            type="text"
                            value={image_url}
                            className="itinerary-form-input"
                            placeholder="Change cover"
                            onChange={(e) => setImage_url(e.target.value)}
                        />
                    </div>
                    <div className="flexy">
                        <label className="form-label">
                            Itinerary Notes
                        </label>
                        <input
                            type="text"
                            value={notes}
                            className="itinerary-form-input"
                            placeholder="Notes..."
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <div className="form-button-div">
                        <button type="submit" className="form-button">New Itinerary</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateItineraryForm
