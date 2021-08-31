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
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');


    // const submittedForm = () => {
    //     setSubmittedForm(!submittedForm)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('BEFORE')
        const itinerary = { title, start_date, end_date, owner_id, image_url, notes }
        const success = await dispatch(postItinerary(itinerary));
        // const clearForm = () => {
        //     setTitle('');
        //     setStart_date('');
        //     setEnd_date('');
        //     setImage_url('');
        //     setNotes('');
        // }
        // setSubmittedForm(!submittedForm)
        if (success) {
            setShowModal(false)
            // clearForm()
        }
        // window.location.reload();
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

export default CreateItineraryForm