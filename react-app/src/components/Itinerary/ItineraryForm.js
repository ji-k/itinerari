import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postItinerary } from '../../store/itineraries';
import './ItineraryForm.css'

const ItineraryForm = ({ input, setInput }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');

    const [submittedForm, setSubmittedForm] = useState(false)
    const owner_id = useSelector(state => state.session.user.id)
    const [errors, setErrors] = useState([]);


    // const submittedForm = () => {
    //     setSubmittedForm(!submittedForm)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        await dispatch(postItinerary(title, start_date, end_date, owner_id, image_url, notes));
        setSubmittedForm(!submittedForm)
    }

    // setSubmittedForm(!submittedForm)
    // window.location.reload();
    // // console.log('AFTER')

    const successMessage = `Your itinerary has been created.`;
    const closeWindow = `Click outside of this window to close.`;

    useEffect(() => {
        alert('reload!')
    }, [])

    return (
        <>
            <div>
                {submittedForm && (
                    <>
                        <h3 style={{ color: "green" }}>{successMessage}</h3>
                        <p>{closeWindow}</p>
                    </>
                )}
                {!submittedForm}
            </div>
            <div className="itinerary-form__container">
                <form className="itinerary-form" onSubmit={handleSubmit}>
                    <ul>
                        {errors &&
                            errors.map((error, idx) => (
                                <li key={idx} style={{ color: "red" }}>
                                    {error}
                                </li>
                            ))}
                    </ul>
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
