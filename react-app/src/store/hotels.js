const POST_HOTEL = 'itinerary/POST_HOTEL';
const DELETE_HOTEL = 'itinerary/DELETE_HOTEL';

const createHotel = (hotel) => ({
    type: POST_HOTEL,
    hotel
})

const deleteHotel = (hotel) => ({
    type: DELETE_HOTEL,
    hotel
})


// thunk creator for POST request
export const postHotel = (hotel) => async (dispatch) => {
    const res = await fetch(`/api/hotels/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hotel)
    });
    if (res.ok) {
        const data = await res.json();
        return 'success';
    }
}

// initial state
const initialState = {};
