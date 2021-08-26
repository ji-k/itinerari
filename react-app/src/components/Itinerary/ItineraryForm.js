import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postItinerary } from '../../store/itineraries';

const ItineraryForm = () => {
    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(postItinerary(title, start_date, end_date, image_url, notes));
    };

    return (
        <>
            <div className="itinerary-form__container">
                <form className="itinerary-form" onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="date" value={start_date} onChange={(e) => setStart_date(e.target.value)} />
                    <input type="date" value={end_date} onChange={(e) => setEnd_date(e.target.value)} />
                    <input type="text" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
                    <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    <button>New Itinerary</button>
                </form>
            </div>
        </>
    )
}

export default ItineraryForm
