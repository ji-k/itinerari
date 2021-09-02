import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateItinerary } from '../../store/itineraries';
import './ItineraryForm.css'

const EditItineraryForm = ({ itinerary, setShowModal }) => {
    // const owner_id = useSelector(state => state.session.user.id)
    // const itineraries = useSelector(state => state.itineraries)
    // const itineraries = Object.values(useSelector(state => state.itineraries))
    let sYear = (new Date(Date.parse(itinerary.start_date))).getFullYear()
    let sMonth = ((new Date(Date.parse(itinerary.start_date))).getUTCMonth() + 1).toString()
    // let sDay = ((new Date(Date.parse(itinerary.start_date))).getDate() + 1).toString()
    let sDay = ((new Date(Date.parse(itinerary.start_date))).getUTCDate()).toString()
    let eYear = (new Date(Date.parse(itinerary.end_date))).getFullYear()
    let eMonth = ((new Date(Date.parse(itinerary.end_date))).getUTCMonth() + 1).toString()
    // let eDay = ((new Date(Date.parse(itinerary.end_date))).getDate() + 1).toString()
    let eDay = ((new Date(Date.parse(itinerary.end_date))).getUTCDate()).toString()
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState(`${sYear}-${sMonth.length < 2 ? `0${sMonth}` : sMonth}-${sDay.length < 2 ? `0${sDay}` : sDay}`);
    const [end_date, setEnd_date] = useState(`${eYear}-${eMonth.length < 2 ? `0${eMonth}` : eMonth}-${eDay.length < 2 ? `0${eDay}` : eDay}`);
    const [image_url, setImage_url] = useState('');
    const [notes, setNotes] = useState('');

    // var step1 = itinerary.start_date;
    // var step2 = Date.parse(step1);
    // var step3 = new Date(step2);
    // var step4 = step3.getMonth()


    const itineraryId = itinerary.id

    useEffect(() => {
        setTitle(itinerary.title)

        setImage_url(itinerary.image_url)
        setNotes(itinerary.notes)

        setStart_date(`${sYear}-${sMonth.length < 2 ? `0${sMonth}` : sMonth}-${sDay.length < 2 ? `0${sDay}` : sDay}`)
        setEnd_date(`${eYear}-${eMonth.length < 2 ? `0${eMonth}` : eMonth}-${eDay.length < 2 ? `0${eDay}` : eDay}`)
    }, [itinerary])


    const handleSubmit = async (e) => {
        e.preventDefault();
        // itinerary.title = title
        // itinerary.start_date = start_date
        // itinerary.end_date = end_date
        // itinerary.image_url = image_url
        // itinerary.notes = notes

        const success = await dispatch(updateItinerary(itineraryId, title, start_date, end_date, image_url, notes));

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
