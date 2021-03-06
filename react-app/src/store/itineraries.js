// define action type as constants
const SET_ITINERARIES = 'itinerary/SET_ITINERARIES'
const SET_ITINERARY = 'itineraries/SET_ITINERARY';
const EDIT_ITINERARY = 'itineraries/EDIT_ITINERARY';
const POST_ITINERARY = 'itineraries/POST_ITINERARY';
const DELETE_ITINERARY = 'itineraries/DELETE_ITINERARY';

// define action creator
const setItineraries = (itineraries) => ({
    type: SET_ITINERARIES,
    payload: itineraries
});

const setItinerary = (itinerary) => ({
    type: SET_ITINERARY,
    itinerary
});

const editItinerary = (itinerary) => ({
    type: EDIT_ITINERARY,
    itinerary
});

const createItinerary = (itinerary) => ({
    type: POST_ITINERARY,
    itinerary
});

const deleteItinerary = (itinerary) => ({
    type: DELETE_ITINERARY,
    itinerary
});


// define thunk creator for GET /itineraries
export const getItineraries = () => async (dispatch) => {
    const res = await fetch("/api/itineraries/");
    if (res.ok) {
        const { itineraries } = await res.json();
        dispatch(setItineraries(itineraries));
        return null;
    }
};

// define thunk creator for GET /itineraries/:id
export const getItinerary = (id) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/${id}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(setItinerary(data));
    }
    return res
}

// define thunk creator for PUT request (edit)
export const updateItinerary = (id, title, start_date, end_date, image_url, notes) => async (dispatch) => {
    const form = new FormData();
    form.append('title', title);
    form.append('start_date', start_date);
    form.append('end_date', end_date);
    form.append('image_url', image_url);
    form.append('notes', notes);



    const res = await fetch(`/api/itineraries/${id}/edit/`, {
        method: 'POST',
        body: form
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(editItinerary(data));
        return data
    } else {
        return ["An error occurred. Please try again"]
    }
}

// define thunk creator for POST request
export const postItinerary = (itinerary) => async (dispatch) => {

    // const form = new FormData();
    // form.append('title', title);
    // form.append('start_date', start_date);
    // form.append('end_date', end_date);
    // form.append('image_url', image_url);
    // form.append('owner_id', owner_id);
    // form.append('notes', notes);
    const res = await fetch(`/api/itineraries/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itinerary)
    });
    if (res.ok) {
        const { itineraries } = await res.json();
        dispatch(createItinerary(itineraries));
        return 'success';
    }
}

// define thunk creator for DELETE request
export const removeItinerary = (id) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/${id}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        await res.json();
        dispatch(deleteItinerary(id))
    }
    return res;
}

// define the initial state
const initialState = {};

// define a reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITINERARIES:
            // return { ...action.payload.itineraries }
            return {
                ...state,
                ...action.payload
            }
        case SET_ITINERARY:
            return { ...state, [action.itinerary.id]: action.itinerary }
        case EDIT_ITINERARY:
            return {
                ...state,
                [action.itinerary.id]: action.itinerary
            }
        case POST_ITINERARY:
            // return { itineraries: action.payload };
            // const { itineraries } = action.payload;
            return { ...state, [action.itinerary.id]: action.itinerary };
        case DELETE_ITINERARY:
            const newObj = { ...state };
            delete newObj[action.itinerary];
            return newObj
        default:
            return state;
    }
}
