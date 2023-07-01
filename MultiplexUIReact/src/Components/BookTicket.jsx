import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
// import SeatMatrix from "./SeatMatrix";
// import "./bookticket.css";

// import '../Home/style.css';
class BookTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tcreated:"",
            ttype: "",
            quant: "",
            time: "",
            date: "",
            price: '',
            screen_id: sessionStorage.getItem("ScreenId"),
            movie_id: sessionStorage.getItem("MovieId"),
            mobno: localStorage.getItem("MobileNumber"),
            totalPrice: 0,
        };
        // this.changedata = this.changedata.bind(this);

    }



    GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    ShowData = (event) => {
        const ticket = {
            Movietiming:this.state.date+'T'+this.state.time,
            TicketType: this.state.ttype,
            Quantity: parseInt(this.state.quant),
            ScreenId: parseInt(this.state.screen_id),
            MovieId: parseInt(this.state.movie_id),
            // MultiplexId: parseInt(this.state.multiplex_id),
            Price: this.state.totalPrice,
            MobileNo: parseInt(this.state.mobno),
        };
        // let tt = this.state.ttype
        // if(tt=='Gold'){
        //     // this.state.price=200
        //     this.setState({price:200})
        // }else if(tt=='Silver'){
        //     this.setState({price:150})
        // }else if(tt == 'Premium'){
        //     this.setState({price:250})

        // }

        console.log(ticket);
        Axios.post("http://localhost:5155/api/TicketAPI/AddTicket", ticket).then(
            (r) => {
                if (r) {
                    alert("New ticket Added");
                }
            }
        );
        event.preventDefault();
    };
    logtime = (e) => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        //2012-04-23T18:25:43.511Z
        today = yyyy + "-" + mm + "-" + dd +'T';
        this.state.tcreated = today;
    };
    changedata = (event) => {
        let tt = this.state.ttype;
        // console.log(tt);
        if (tt == "Select") {
            this.state.price = 0;
            // this.setState({price:0})
        }
        if (tt == "Gold") {
            this.state.price = 200;
            // this.setState({ price: 200 })
        }
        if (tt == "Silver") {
            this.state.price = 150;
            // this.setState({ price: 150 })
        }
        if (tt == "Premium") {
            this.state.price = 250;
            // this.setState({ price: 250 })
        }
        // console.log(this.state.price);
    };
    calPrice = (event) => {
        // alert("hello world");
        // alert(`${this.state.price} and  ${this.state.quant} `);
        let total = this.state.price * this.state.quant;

        // console.log(total);
        this.state.totalPrice = total;
    };
    showticket = (e) => {
        const container = document.querySelector('.container12');
        const seats = document.querySelectorAll('.row .seat:not(.occupied)');
        const count = document.getElementById('count');
        const total = document.getElementById('total');
        let Quantity =this.state.quant
        let pricevar = this.state.price;
        const tickettype = document.getElementById('movie') ;
        // console.log(container)
        populateUI();

        // let ticketPrice = +tickettype.value;

        // // Save selected movie index and price
        function setMovieData(movieIndex, ticketType) {
            localStorage.setItem('selectedMovieIndex', movieIndex);
            localStorage.setItem('selectedMovieType', ticketType);
            }

        // // Update total and count

        // // Get data from localstorage and populate UI
        function populateUI() {
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

            // if (selectedSeats !== null && selectedSeats.length > 0) {
            //     seats.forEach((seat, index) => {
            //         if (selectedSeats.indexOf(index) > -1) {
            //             seat.classList.add('selected');
            //         }
            //     });
            // }

            const selectedMovieType = localStorage.getItem('selectedMovieType');

            // if (selectedMovieType !== null) {
            //     tickettype.selectedIndex = selectedMovieType;
            // }
        }

        // Movie select event
        // tickettype.addEventListener('change', e => {
            // ticketPrice = +e.target.value;
            // console.log(tickettype.selectedIndex);
            setMovieData(tickettype.selectedIndex, tickettype.options[tickettype.selectedIndex].value);
            updateSelectedCount();
            // });

        // Seat click event
        // container.addEventListener('click', e => {
        if (
            e.target.classList.contains('seat') &&
            !e.target.classList.contains('occupied')
        ) {
            e.target.classList.toggle('selected');

           updateSelectedCount();
        }
        // });

        // Initial count and total set
        // updateSelectedCount();
        // console.log(Quantity)
        function updateSelectedCount() {
            const selectedSeats = document.querySelectorAll('.row .seat.selected');
            //    console.log(this.showticket.count)
            const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
            
            localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
            
            const selectedSeatsCount = selectedSeats.length;
            
            count.innerText = selectedSeatsCount;
        //    let totalpricevar = selectedSeats * pricevar
        total.innerText = selectedSeatsCount * pricevar;
            //   console.log(pricevar)
            Quantity=selectedSeatsCount
            // setMovieData(tickettype.selectedIndex, tickettype.value);
        }
        this.state.quant=Quantity
        // console.log(Quantity)
    }
    render() {
        return (
            <div className="SeatContainer container-fluid back">
                <form className="SeatContainer was-validated" onSubmit={this.ShowData}>
                    <h2 className="h2">Add Ticket</h2>
                    <div className="form-group movie-container">
                        <label>Select Ticket Type</label>
                        <select
                            name="ttype"
                            id="movie"
                            required
                            onInput={this.GetData}
                            onChange={this.changedata}
                        >
                            <option value="">Select</option>
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Premium">Premium</option>
                        </select>
                        {/* <div className="invalid-feedback">Ticket Type cannot be blank.</div> */}
                    </div>
                    <div className="form-group movie-container">
                        <label>Select Movie Timing</label>
                        <select
                            name="time"
                            id="movie"
                            required
                            onInput={this.GetData}
                            onChange={this.changedata}
                        >
                            <option value="">Select</option>
                            <option value="10:0:0AM">10 AM</option>
                            <option value="01:0:0PM">1 PM</option>
                            <option value="05:0:0PM">5 PM</option>
                            <option value="09:0:0PM">9 PM</option>
                        </select>
                        {/* <div className="invalid-feedback">Movie Time cannot be blank.</div> */}
                    </div>
                    <div className="SeatContainer">
                        {/* <div className="movie-container">
                    <label>Pick a movie:</label>
                    <select id="movie">
                        <option value="10">Avengers: Endgame ($10)</option>
                        <option value="12">Joker ($12)</option>
                        <option value="8">Toy Story 4 ($8)</option>
                        <option value="9">The Lion King ($9)</option>
                    </select>
                </div> */}

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

                        <div className="container12" onClick={this.showticket}>
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

                        {/* <script src="Script.js"></script> */}
                    </div>
{/*                     
                    <div className="form-group movie-container">
                        <label>Quantity</label>
                        <input
                            type="number"
                            className="form-Control"
                            placeholder="No of tickets to book"
                            required
                            name="quant"
                            onInput={this.GetData}
                        />
                        <div className="invalid-feedback"> This field cannot be blank.</div>
                    </div> */}
                    <div className="form-group movie-container">
                        <label>Movie Date</label>
                        <input
                            type="date"
                            className="form-Control"
                            placeholder="Time cannot be blank"
                            required
                            name="date"
                            onInput={this.GetData}
                            onChange={this.calPrice}
                        />
                        {/* <div className="invalid-feedback text-white"> This field cannot be blank.</div> */}
                    </div>
                    <div className="form-group movie-container">
                        <label>Price</label>
                        {/* <select name="price" required onChange={this.changedata}>
                            <option value="">Select</option>
                            <option value="200">Gold  @  200</option>
                            <option value="150">Silver @ 150</option>
                            <option value="250">Premium @ 250</option>
                        </select> */}
                        <input
                            type="number"
                            className="form-Control"
                            placeholder="price"
                            name="price"
                            onInput={this.GetData}
                            value={this.state.totalPrice}
                            readOnly
                        />
                        {/* <div className="invalid-feedback ">Ticket price cannot be blank.</div> */}
                    </div>
                    {/* <div className="form-group">
                        <label>Enter Multiplex Id</label>
                        <input type="number" className="form-Control" placeholder="Enter Multiplex Id"
                            required name="multiplex_id" onInput={this.GetData}></input>
                        <div className="invalid-feedback"> multiplex Id cannot be blank.</div>
                    </div> */}
                    {/* <div className="form-group">
                        <label>Enter Screen Id</label>
                        <input type="number" className="form-Control" placeholder="Enter screen Id"
                            required name="screen_id" onInput={this.GetData} readOnly></input>
                        <div className="invalid-feedback"> screen Id cannot be blank.</div>
                    </div>
                    <div className="form-group">
                        <label>Enter Movie Id</label>
                        <input type="number" className="form-Control" placeholder="Enter movie Id"
                            required name="movie_id" onInput={this.GetData} readOnly></input>
                        <div className="invalid-feedback"> movie Id cannot be blank.</div>
                    </div> */}
                    <div className="button-container">
                        <button
                            type="submit"
                            onClick={this.logtime}
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
    }
}
export default BookTicket;
