const POST_RENTAL = 'itinerary/POST_RENTAL';
const DELETE_RENTAL = 'itinerary/DELETE_RENTAL';

const createRental = (rental) => ({
    type: POST_RENTAL,
    rental
})

const deleteRental = (rental) => ({
    type: DELETE_RENTAL,
    rental
})


// thunk creator for POST request
export const postRental = (rental) => async (dispatch) => {
    const res = await fetch(`/api/rentals/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rental)
    });
    if (res.ok) {
        const data = await res.json();
        return 'success';
    }
}

// initial state
const initialState = {};
