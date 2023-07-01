import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import './styleshowticket.css';
import { Link } from "react-router-dom";
export default class ShowAllTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Ticket: [],
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5155/api/ScreenAPI/ShowAllTickets").then(r => {
            console.log(r.data);
            this.setState({ Ticket: r.data });
        })
    }
    Show = (e) => {
        alert('Clicked on this row');
        var rb = document.getElementsByName("rbSelect");
        var table = document.getElementById("test");
        let sid = 0;
        for (var i = 0; i < rb.length; i++) {
            if (rb[i].checked) {
                sid = table.rows[i + 1].cells.item(1).innerHTML;
                table.deleteRow(i + 1);
            }
        }
        alert("ScreenId:" + sid);
        Axios.delete("http://localhost:5155/api/TicketAPI/DeleteTicket/" + sid).then(r => {
            console.log(r);
            if (r) {
                alert("Data Deleted");
            }
        });
    }
    render() {
        return (
            <div className="cant48">
            <div className="container48">
                <h1>Show All Tickets</h1>
                <table className="table " id="test">
                    <thead>
                        <tr>
                            {/* <th>Click to Delete</th> */}
                            <th>TicketId</th>
                            <th>CreatedAt</th>
                            <th>TicketType</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Ticket.map(x =>
                            <tr >
                                {/* <td><input type="radio" name="rbSelect" value="Select" onChange={this.Show}/></td> */}
                                <td id="sid">{x.ticketId}</td>
                                <td>{x.createdAt}</td>
                                <td>{x.ticketType}</td>
                                <td>{x.name}</td>
                                <td>{x.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Link  to="/AdminDashBoard">
                                        <button id="submit" className="">Dashboard</button>
                                    </Link>
                <hr>
                </hr>
            </div>
            </div>
        );
    }
}