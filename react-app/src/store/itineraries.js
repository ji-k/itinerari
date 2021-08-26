// define action type as constants
const SET_ITINERARIES = 'itinerary/SET_ITINERARIES'
const SET_ITINERARY = 'itineraries/SET_ITINERARY';
const EDIT_ITINERARY = 'itineraries/EDIT_ITINERARY';
const POST_ITINERARY = 'itineraries/POST_ITINERARY';
const DELETE_ITINERARY = 'itineraries/DELETE_ITINERARY';

// define action creator
const setItineraries = (itineraries) => ({
    type: SET_ITINERARIES,
    itineraries
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
    const res = await fetch('/api/itineraries/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (res.ok) {
        const data = await res.json();
        if (data.errors) {
            return;
        }
        dispatch(setItineraries(data));
    }
}

// define thunk creator for GET /itineraries/:id
export const getItinerary = (id) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/${id}`);
    const data = await res.json();
    dispatch(setItinerary(data)); // pass in post from database
}

// define thunk creator for PUT request (edit)
export const updateItinerary = (title, start_date, end_date, image_url, notes) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/${itinerary_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            start_date,
            end_date,
            image_url,
            notes
        })
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(editItinerary(data));
        return data
    }
}

// define thunk creator for POST request
export const postItinerary = (itinerary) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itinerary)
    });
    if (res.ok) {
        const data = await res.json();
        if (data.errors) {
            return data;
        }
        dispatch(createItinerary(data));
        return data;
    }
}

// define thunk creator for DELETE request
export const removeItinerary = async (id) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(deleteItinerary(data))
        return data;
    }
}

// define the initial state
const initialState = {};

// define a reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITINERARIES:
            const allItineraries = {}
            action.itineraries.forEach(itinerary => {
                allItineraries[itinerary.id] = itinerary
            })
            return allItineraries
        case SET_ITINERARY:
            const newItinerary = { post: action.itinerary }
            return { ...state, ...newItinerary };
        case EDIT_ITINERARY:
            return {
                ...state,
                [action.itinerary.id]: action.itinerary
            }
        case POST_ITINERARY:
            return {
                ...state,
                [action.itinerary.id]: action.itinerary
            }
        case DELETE_ITINERARY:
            const newObj = { ...state };
            delete newObj[action.itinerary.id];
            return newObj
        default:
            return state;
    }
}
