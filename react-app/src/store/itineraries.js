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
    payload: itinerary
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
    const res = await fetch('/api/itineraries/');
    if (res.ok) {
        const data = await res.json();
        dispatch(setItineraries(data));
        return null;
    }
}

// define thunk creator for GET /itineraries/:id
export const getItinerary = (id) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/${id}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(getItinerary(data));
    }
}

// define thunk creator for PUT request (edit)
// export const updateItinerary = (id, title, start_date, end_date, image_url, notes) => async (dispatch) => {
//     const res = await fetch(`/api/itineraries/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title,
//             start_date,
//             end_date,
//             image_url,
//             notes
//         })
//     });
//     if (res.ok) {
//         const data = await res.json();
//         dispatch(editItinerary(data));
//         return data
//     } else {
//         return ["An error occurred. Please try again"]
//     }
// }

// define thunk creator for POST request
export const postItinerary = (title, start_date, end_date, owner_id, image_url, notes) => async (dispatch) => {
    console.log('NO BRANDON', owner_id)
    const form = new FormData();
    form.append('title', title);
    form.append('start_date', start_date);
    form.append('end_date', end_date);
    form.append('image_url', image_url);
    form.append('owner_id', owner_id);
    form.append('notes', notes);
    const res = await fetch(`/api/itineraries/create/`, {
        method: "POST",
        body: form
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
export const removeItinerary = (id) => async (dispatch) => {
    const res = await fetch(`/api/itineraries/${id}`, {
        method: 'DELETE'
    });
    // console.log("----------------------------------------------------------------", res)
    if (res.ok) {
        const data = await res.json();
        dispatch(deleteItinerary(id))
        return data;
    }
}

// define the initial state
const initialState = {};

// define a reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITINERARIES:
            return { ...action.payload.itineraries }
        // case SET_ITINERARY:
        //     return { itineraries: action.payload }
        // case EDIT_ITINERARY:
        //     return {
        //         ...state,
        //         [action.itinerary.id]: action.itinerary
        //     }
        case POST_ITINERARY:
            return { itineraries: action.payload };
        case DELETE_ITINERARY: // ! WHYYYY DID I HAVE THIS COMMENTED OUT
            const newObj = { ...state };
            delete newObj[action.itinerary.id];
            return newObj
        default:
            return state;
    }
}
