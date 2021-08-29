import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItinerary } from '../../store/itineraries';
import { useParams } from "react-router-dom";
import './ItineraryForm.css'



const EditItineraryForm = ({ itinerary }) => {
    const owner_id = useSelector(state => state.session.user.id)
    // const itineraries = useSelector(state => state.itineraries)
    const itineraries = Object.values(useSelector(state => state.itineraries))

    const dispatch = useDispatch();
    const { id } = useParams;

    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');

    const itineraryId = itinerary[0].id

    // const itineraryIdToEdit = itineraries.filter(itinerary => (
    //     itinerary?.id == number
    // ))


    // const submittedForm = () => {
    //     setSubmittedForm(!submittedForm)
    // }

    const itinerariesX = itinerary

    useEffect(() => {
        setTitle(itinerariesX.title)
        setStart_date(itinerariesX.start_date)
        setEnd_date(itinerariesX.end_date)
        setImage_url(itinerariesX.image_url)
        setNotes(itinerariesX.notes)
    }, [itinerariesX])

    console.log("------", itinerariesX)


    const handleSubmit = async (e) => {
        e.preventDefault();
        itinerariesX.title = title
        itinerariesX.start_date = start_date
        itinerariesX.end_date = end_date
        itinerariesX.image_url = image_url
        itinerariesX.notes = notes
        // console.log('BEFORE')
        // setSubmittedForm(!submittedForm)
        // window.location.reload();
        // console.log('AFTER')
        dispatch(updateItinerary(itineraryId, title, start_date, end_date, image_url, notes));
        // history.push('/');
    };
    console.log("---odksfjdlfsdf==-=", itineraryId)

    console.log("---------", itineraries)
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
