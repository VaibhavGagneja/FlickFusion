import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import { Link } from "react-router-dom";

export default class ShowTableTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TicketId: localStorage.getItem('TicketId'),
      CreatedAt: localStorage.getItem("CreatedAt"),
      // name:localStorage.getItem('name'),
      //MovieName:localStorage.getItem('MovieName'),
      TicketType: localStorage.getItem('TicketType'),
      Quantity: localStorage.getItem('Quantity'),
      ScreenId: localStorage.getItem('ScreenId'),
      MovieId: localStorage.getItem('MovieId'),
      // MovieDuration:localStorage.getItem('MovieDuration'),
      // Price:localStorage.getItem('Price'),
      mno: localStorage.getItem('mno'),
      //  mno:localStorage.getItem('mno')
    }
    console.log(this.state.CreatedAt + "," + this.state.TicketId + "," + this.state.TicketType + "," +
      this.state.Quantity + "," + this.state.ScreenId + "," + this.state.MovieId + "," + this.state.mno
    );
  }
  download = (event) => {
    event.preventDefault();
    alert("Saving");
    const doc = new jsPDF()
    autoTable(doc, { html: '#test' })
    doc.save('table.pdf')
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <table className="table table-striped" id="test">
          <thead>
            <tr>
              <th>Ticket Id</th>
              <th>Date of Booking</th>
              <th>Ticket Type</th>
              <th>Quantity</th>
              <th>Screen Id</th>
              <th>Movie Id</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.TicketId}</td>
              <td>{this.state.CreatedAt}</td>
              <td>{this.state.TicketType}</td>
              <td>{this.state.Quantity}</td>
              <td>{this.state.ScreenId}</td>
              <td>{this.state.MovieId}</td>
              <td>{this.state.mno}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="button" onClick={this.download} value="Download file" ></button>
          {/* <Link to="/CustomerDashBoard">
            <button id="" className='btn btn-primary' >Dashboard</button>
          </Link > */}
        </div>
      </div>
    );
  }
}