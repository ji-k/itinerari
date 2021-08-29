import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItinerary } from '../../store/itineraries';
import { useParams } from "react-router-dom";
import './ItineraryForm.css'



const EditItineraryForm = ({ itinerary }) => {
    const owner_id = useSelector(state => state.session.user.id)
    const itineraries = useSelector(state => state.itineraries)
    const dispatch = useDispatch();
    const { id } = useParams;

    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');


    // const submittedForm = () => {
    //     setSubmittedForm(!submittedForm)
    // }

    useEffect(() => {
        setTitle(itinerary?.title)
        setStart_date(itinerary?.start_date)
        setEnd_date(itinerary?.end_date)
        setImage_url(itinerary?.image_url)
        setNotes(itinerary?.notes)
    }, [itinerary])

    const handleSubmit = async (e) => {
        e.preventDefault();
        title: title

        // console.log('BEFORE')
        // setSubmittedForm(!submittedForm)
        // window.location.reload();
        // console.log('AFTER')
        dispatch(updateItinerary(itinerary));
        // history.push('/');
    };

    return (
        <>
            <div className="itinerary-form__container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        placeholder="Bon Voyage!"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>
                        Start Date
                    </label>
                    <input
                        type="date"
                        value={start_date}
                        onChange={(e) => setStart_date(e.target.value)} />
                    <label>
                        End Date
                    </label>
                    <input
                        type="date"
                        value={end_date}
                        onChange={(e) => setEnd_date(e.target.value)} />
                    <label>
                        Upload an Cover
                    </label>
                    <input
                        type="text"
                        value={image_url}
                        placeholder="Change cover"
                        onChange={(e) => setImage_url(e.target.value)} />
                    <label>
                        Itinerary Notes
                    </label>
                    <input
                        type="text"
                        value={notes}
                        placeholder="Notes..."
                        onChange={(e) => setNotes(e.target.value)} />
                    <button type="submit">Edit Itinerary</button>
                </form>
            </div>
        </>
    )
}

export default EditItineraryForm
