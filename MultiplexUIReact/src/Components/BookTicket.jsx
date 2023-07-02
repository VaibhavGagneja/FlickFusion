import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "./bookticket.css";

const BookTicket = () => {
    const [tcreated, setTcreated] = useState("");
    const [ttype, setTtype] = useState("");
    const [quant, setQuant] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [screen_id] = useState(sessionStorage.getItem("ScreenId"));
    const [movie_id] = useState(sessionStorage.getItem("MovieId"));
    const [mobno] = useState(localStorage.getItem("MobileNumber"));
    const [totalPrice, setTotalPrice] = useState(0);
    
    const GetData = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "ttype":
                setTtype(value);
                break;
            case "quant":
                setQuant(value);
                break;
            case "time":
                setTime(value);
                break;
            case "date":
                setDate(value);
                break;
            case "price":
                setPrice(value);
                break;
            default:
                break;
        }
    };

    const ShowData = (event) => {
        event.preventDefault();
        const ticket = {
            Movietiming: date + "T" + time,
            TicketType: ttype,
            Quantity: parseInt(quant),
            ScreenId: parseInt(screen_id),
            MovieId: parseInt(movie_id),
            Price: totalPrice,
            MobileNo: parseInt(mobno),
        };

        console.log(ticket);
        Axios.post("http://localhost:5155/api/TicketAPI/AddTicket", ticket).then((r) => {
            if (r) {
                alert("New ticket Added");
            }
        });
    };

    const logtime = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd + "T";
        setTcreated(today);
    };

    const changedata = () => {
        let priceVar = 0;
        if (ttype === "Select") {
            priceVar = 0;
        } else if (ttype === "Gold") {
            priceVar = 200;
        } else if (ttype === "Silver") {
            priceVar = 150;
        } else if (ttype === "Premium") {
            priceVar = 250;
        }
        setPrice(priceVar);
    };

    const calPrice = () => {
        let total = price * quant;
        setTotalPrice(total);
    };

    const showticket = (e) => {
        const container = document.querySelector('.container12');
        const seats = document.querySelectorAll('.row .seat:not(.occupied)');
        const count = document.getElementById('count');
        const total = document.getElementById('total');
        let Quantity = quant
        let pricevar = price;
        const tickettype = document.getElementById('movie');
        populateUI();


        function setMovieData(movieIndex, ticketType) {
            localStorage.setItem('selectedMovieIndex', movieIndex);
            localStorage.setItem('selectedMovieType', ticketType);
        }


        function populateUI() {
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));



            const selectedMovieType = localStorage.getItem('selectedMovieType');


        }


        setMovieData(tickettype.selectedIndex, tickettype.options[tickettype.selectedIndex].value);
        updateSelectedCount();

        if (
            e.target.classList.contains('seat') &&
            !e.target.classList.contains('occupied')
        ) {
            e.target.classList.toggle('selected');

            updateSelectedCount();
        }

        function updateSelectedCount() {
            const selectedSeats = document.querySelectorAll('.row .seat.selected');
            const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

            localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

            const selectedSeatsCount = selectedSeats.length;

            count.innerText = selectedSeatsCount;
            total.innerText = selectedSeatsCount * pricevar;
            Quantity = selectedSeatsCount
        }
       setQuant(Quantity)
    };

    return (
        <div className="SeatContainer container-fluid back">
            <form className="SeatContainer was-validated" onSubmit={ShowData}>
                <h2 className="h2">Add Ticket</h2>
                <div className="form-group movie-container">
                    <label>Select Ticket Type</label>
                    <select
                        name="ttype"
                        id="movie"
                        required
                        onInput={GetData}
                        onChange={changedata}
                    >
                        <option value="">Select</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>
                <div className="form-group movie-container">
                    <label>Select Movie Timing</label>
                    <select
                        name="time"
                        id="movie"
                        required
                        onInput={GetData}
                        onChange={changedata}
                    >
                        <option value="">Select</option>
                        <option value="10:0:0AM">10 AM</option>
                        <option value="01:0:0PM">1 PM</option>
                        <option value="05:0:0PM">5 PM</option>
                        <option value="09:0:0PM">9 PM</option>
                    </select>
                </div>
                <div className="SeatContainer">


                    <ul className="showcase">
                        <li>
                            <div className="seat"></div>
                            <small>N/A</small>
                        </li>
                        <li>
                            <div className="seat selected"></div>
                            <small>Selected</small>
                        </li>
                        <li>
                            <div className="seat occupied"></div>
                            <small>Occupied</small>
                        </li>
                    </ul>

                    <div className="container12" onClick={showticket}>
                        <div className="screen"></div>

                        <div className="row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat occupied"></div>
                            <div className="seat occupied"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat occupied"></div>
                            <div className="seat occupied"></div>
                        </div>
                        <div className="row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat occupied"></div>
                            <div className="seat occupied"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat occupied"></div>
                            <div className="seat occupied"></div>
                            <div className="seat occupied"></div>
                            <div className="seat"></div>
                        </div>
                    </div>

                    <p className="text">
                        You have selected <span id="count">0</span> seats for a price of &#8377;
                        <span id="total">0</span>
                    </p>

                </div>

                <div className="form-group movie-container">
                    <label>Movie Date</label>
                    <input
                        type="date"
                        className="form-Control"
                        placeholder="Time cannot be blank"
                        required
                        name="date"
                        onInput={GetData}
                        onChange={calPrice}
                    />
                </div>
                <div className="form-group movie-container">
                    <label>Price</label>

                    <input
                        type="number"
                        className="form-Control"
                        placeholder="price"
                        name="price"
                        onInput={GetData}
                        value={totalPrice}
                        readOnly
                    />
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        onClick={logtime}
                        className="btn btn-success btn-block"
                    >
                        Add
                    </button>
                    <button type="reset" className="btn btn-danger btn-block">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookTicket;
