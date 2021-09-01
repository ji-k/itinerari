// action type as constants
const SET_FLIGHT = 'itinerary/SET_FLIGHT';
const EDIT_FLIGHT = 'itinerary/EDIT_FLIGHT';
const POST_FLIGHT = 'itinerary/POST_FLIGHT';
const DELETE_FLIGHT = 'itinerary/DELETE_FLIGHT';

// action creators
const setFlight = (flight) => ({
    type: SET_FLIGHT,
    payload: flight
});

const createFlight = (flight) => ({
    type: POST_FLIGHT,
    flight
})


// thunk creator for GET /flights
export const getFlight = () => async (dispatch) => {
    const res = await fetch("/api/flight/");
    if (res.ok) {
        const { flight } = await res.json();
        dispatch(setFlight(flight));
        return null;
    }
};

// thunk creator for POST request
export const postFlight = (flight) => async (dispatch) => {
    console.log(flight)
    console.log("************8")
    const res = await fetch(`/api/flights/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flight)
    });
    if (res.ok) {
        const flight = await res.json();
        dispatch(createFlight(flight));
        return 'success';
    }
}

// initial state
const initialState = {};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FLIGHT:
            return { ...state, ...action.flight }
        case POST_FLIGHT:
            return {
                ...state, [action.flight.id]: action.flight
            };
        default: return state;
    }
}
