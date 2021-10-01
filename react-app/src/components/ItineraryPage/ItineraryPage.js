import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import EditItineraryModal from '../EditItineraryModal';
import CreateFlightModal from '../CreateFlightModal';
import CreateRentalModal from '../CreateRentalModal'
import CreateHotelModal from '../CreateHotelModal'
import './ItineraryPage.css'
import * as ItineraryActions from '../../store/itineraries'

export default function ItineraryPage({ number }) {
    const itineraries = useSelector(state => state.itineraries)
    // const itineraries = Object.values(useSelector(state => state.itineraries))
    const itinerary = itineraries[number]
    // const itinerary = itineraries.filter(itinerary => (
    //     itinerary?.id == number
    // ))
    const itinerary_id = itinerary?.id

    const dispatch = useDispatch()

    const deleteFlight = async (e, flightId) => {
        e.preventDefault();
        const res = await fetch(`/api/flights/${flightId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (res.ok) {
            await res.json();
            await dispatch(ItineraryActions.getItinerary(itinerary_id));
            // setShowModal(false)
            return 'success';
        }
    }

    const deleteRental = async (e, rentalId) => {
        e.preventDefault();
        const res = await fetch(`/api/rentals/${rentalId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (res.ok) {
            await res.json();
            await dispatch(ItineraryActions.getItinerary(itinerary_id));
            // setShowModal(false)
            return 'success';
        }
    }

    const deleteHotel = async (e, hotelId) => {
        e.preventDefault();
        const res = await fetch(`/api/hotels/${hotelId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (res.ok) {
            await res.json();
            await dispatch(ItineraryActions.getItinerary(itinerary_id));
            // setShowModal(false)
            return 'success';
        }
    }

    // const convertTime = (time) => {
    //     time = time.slice(1);  // Remove full string match value
    //     time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    //     time[0] = +time[0] % 12 || 12; // Adjust hours
    //     return time.join('');
    // }



    return (
        <>
            {itinerary &&
                <div>
                    <div className="itinerary-banner-container">
                        <img src={itinerary?.image_url} className="itinerary-banner" alt="user selects a banner for their itinerary" />
                    </div>
                    <div className="itinerary-page__outer-container">
                        <div className="itinerary-button-div">
                            < EditItineraryModal itinerary={itinerary} />
                            < CreateFlightModal itinerary_id={itinerary_id} />
                            < CreateRentalModal itinerary_id={itinerary_id} />
                            < CreateHotelModal itinerary_id={itinerary_id} />
                        </div>
                        {/* ************* Itinerary ************* */}
                        <div className="general-info__title">{itinerary?.title}</div>
                        <div className="general-info__outer-container">
                            <div className="general-info__date">
                                Trip Dates: {(new Date(itinerary?.start_date).toDateString())} - {(new Date(itinerary?.end_date).toDateString())}
                            </div>
                            {/* <div className="general-info__sDate">Trip Start: {itinerary?.start_date}</div>
                            <div className="general-info__eDate">Trip End: {itinerary?.end_date}</div> */}
                            {itinerary?.notes && <div className="general-info__notes">Notes: {itinerary?.notes}</div>}
                            {/* <p className="">Banner: {itinerary?.image_url}</p> */}
                        </div>
                        {/* ************* Flights ************* */}
                        <div className="flight-info__outer-container">
                            {itinerary?.flight_info?.map((flight, i) => {
                                return (
                                    <div key={i}>
                                        <div className="flight-header-button-flex">
                                            <span className="feature-header">✈️ Flight Information</span>
                                            <button
                                                className="itinerary-delete dashboard-button"
                                                onClick={e => deleteFlight(e, flight?.id)}>Delete Flight
                                            </button>
                                        </div>
                                        <div className="feature-content__container">
                                            <div className="flight-row-1">
                                                <div className="flight-airport">{flight.origin} ➤ {flight.destination}</div>
                                                <div className="flight-date">Date of Travel: {(new Date(flight.date).toDateString())}</div>
                                            </div>
                                            <div className="flight-row-2">
                                                <div>{flight.airline}</div>
                                                <div className="flight-no">{flight.flight_no}</div>
                                            </div>
                                            {/* <p>Origin: {flight.origin}</p> */}
                                            <div className="flight-time__container">
                                                <div className="flight-departure__container">
                                                    <div className="flight-time">{flight.departure}</div>
                                                    {/* <div className="flight-time">{((flight.departure).toString().convertTime())}</div> */}
                                                    <div className="flight-time-label">Departure Time</div>
                                                </div>
                                                <div className="flight-arrival__container">
                                                    <div className="flight-time">{flight.arrival}</div>
                                                    <div className="flight-time-label">Arrival Time</div>
                                                </div>
                                            </div>
                                            {/* <p>Departure Time: {flight.departure}</p> */}
                                            {/* <p>Destination: {flight.destination}</p> */}
                                            {/* <p>Arrival Time: {flight.arrival}</p> */}
                                            {flight?.notes && <div className="flight-notes">Notes: {flight.notes}</div>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* ************* Rental Cars ************* */}
                        <div className="rentalcar-info__outer-container">
                            {itinerary?.rental_info?.map((car, i) => {
                                return (
                                    <div key={i}>
                                        <div className="rental-header-button-flex">
                                            <span className="feature-header">🚗 Rental Car Information</span>
                                            <button
                                                className="itinerary-delete dashboard-button"
                                                onClick={e => deleteRental(e, car?.id)}>Delete Rental
                                            </button>
                                        </div>
                                        <div className="feature-content__container">
                                            <div className="rental-row-1">
                                                <div className="rental-company">{car.company}</div>
                                                <div className="rental-confirmation">Confirmation: {car.confirmation}</div>
                                            </div>
                                            <div className="rental-address">
                                                {car.address}<br />
                                                {car.city}, {car.state} {car.zipcode}
                                            </div>
                                            <div className="box-me">
                                                <div className="flex-rental rental-times">
                                                    {/* <p>Pick Up: {car.pickup_date}</p> */}
                                                    <div className="rental-pickup-date"><b>Pick Up:</b> {(new Date(car.pickup_date).toDateString())}</div>
                                                    <div><b>Pick Up Time:</b> {car.pickup_time}</div>
                                                </div>
                                                <div className="flex-rental rental-times">
                                                    {/* <p>Drop Off: {car.dropoff_date}</p> */}
                                                    <div className="rental-dropoff-date"><b>Drop Up:</b> {(new Date(car.dropoff_date).toDateString())}</div>
                                                    <div><b>Drop Off Time:</b> {car.dropoff_time}</div>
                                                </div>
                                            </div>
                                            <div className="flight-notes">Notes: {car.notes}</div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* ************* Hotels ************* */}
                        <div className="hotel-info__outer-container">
                            {itinerary?.hotel_info?.map((hotel, i) => {
                                return (
                                    <div key={i}>
                                        <div className="rental-header-button-flex">
                                            <span className="feature-header">🏨 Hotel Information</span>
                                            <button
                                                className="itinerary-delete dashboard-button"
                                                onClick={e => deleteHotel(e, hotel?.id)}>Delete Hotel
                                            </button>
                                        </div>
                                        <div className="feature-content__container">
                                            <div className="hotel-property">{hotel.property}</div>
                                            <div className="hotel-address">
                                                {hotel.address}<br />
                                                {hotel.city}, {hotel.state} {hotel.zipcode}
                                            </div>
                                            <div className="flight-notes">Notes: {hotel.notes}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            }
        </>
    )
}
