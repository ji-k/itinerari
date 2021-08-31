import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateItinerary } from '../../store/itineraries';
// import { useParams } from "react-router-dom";
import './ItineraryForm.css'

const EditItineraryForm = ({ itinerary, setShowModal }) => {
    // const owner_id = useSelector(state => state.session.user.id)
    // const itineraries = useSelector(state => state.itineraries)
    // const itineraries = Object.values(useSelector(state => state.itineraries))

    const dispatch = useDispatch();
    // const { id } = useParams;

    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');

    const itineraryId = itinerary.id

    // const itineraryIdToEdit = itineraries.filter(itinerary => (
    //     itinerary?.id == number
    // ))


    // const submittedForm = () => {
    //     setSubmittedForm(!submittedForm)
    // }

    useEffect(() => {
        setTitle(itinerary.title)
        setStart_date(itinerary.start_date)
        setEnd_date(itinerary.end_date)
        setImage_url(itinerary.image_url)
        setNotes(itinerary.notes)
        // console.log(start_date)
        // console.log(typeof start_date)
    }, [itinerary])




    const handleSubmit = async (e) => {
        e.preventDefault();
        // itinerary.title = title
        // itinerary.start_date = start_date
        // itinerary.end_date = end_date
        // itinerary.image_url = image_url
        // itinerary.notes = notes

        // setSubmittedForm(!submittedForm)
        // window.location.reload();

        const success = await dispatch(updateItinerary(itineraryId, title, start_date, end_date, image_url, notes));
        // reloader()
        // history.push('/');

        if (success) {
            setShowModal(false)
        }
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
                        value={itinerary.start_date}
                        onChange={(e) => {
                            console.log(typeof e.target.value)
                            console.log(e.target.value)
                            return setStart_date(e.target.value)
                        }} />
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
