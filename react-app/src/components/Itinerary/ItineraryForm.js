import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postItinerary } from '../../store/itineraries';



// const ItineraryForm = ({ submittedForm }) => {
const ItineraryForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');

    const dispatch = useDispatch();
    const owner_id = useSelector(state => state.session.user.id)

    const submittedForm = () => {
        setFormSubmitted(!formSubmitted)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('BEFORE')
        await dispatch(postItinerary(title, start_date, end_date, owner_id, image_url, notes));
        submittedForm()
        // console.log('AFTER')
    };

    return (
        <>
            <div className="itinerary-form__container">
                <form className="itinerary-form" onSubmit={handleSubmit}>
                    <label>
                        Title
                    </label>
                    <input type="text" value={title} placeholder="Bon Voyage!" onChange={(e) => setTitle(e.target.value)} />
                    <label>
                        Start Date
                    </label>
                    <input type="date" value={start_date} onChange={(e) => setStart_date(e.target.value)} />
                    <label>
                        End Date
                    </label>
                    <input type="date" value={end_date} onChange={(e) => setEnd_date(e.target.value)} />
                    <label>
                        Upload an Cover
                    </label>
                    <input type="text" value={image_url} placeholder="Change cover" onChange={(e) => setImage_url(e.target.value)} />
                    <label>
                        Itinerary Notes
                    </label>
                    <input type="text" value={notes} placeholder="Notes..." onChange={(e) => setNotes(e.target.value)} />
                    <button type="submit">New Itinerary</button>
                </form>
            </div>
        </>
    )
}

export default ItineraryForm
