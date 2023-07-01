import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import "../Components/showallmultimovie.css";
import { Link } from "react-router-dom";

export default class ShowAllMultiplexOwner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Multiplex: [],

        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5155/api/MultiplexAPI/ShowAllMultiplex").then(r => {
            //console.log(r.data);

            this.setState({ Multiplex: r.data });
        })
    }
    Show = (e) => {

        alert('Clicked on this row');
        var rb = document.getElementsByName("rbSelect");
        var table = document.getElementById("tablemultiplex");
        let mid = 0;
        for (var i = 0; i < rb.length; i++) {
            if (rb[i].checked) {

                mid = table.rows[i + 1].cells.item(0).innerHTML;
                table.deleteRow(i + 1);

            }
        }
        alert("MultiplexId:" + mid);
        Axios.delete("http://localhost:5155/api/MultiplexAPI/DeleteMultiplex/" + mid).then(r => {
            console.log(r);

            if (r) {
                alert("Data Deleted");



            }
        });

        // if (mid != ''){

        //     ReactDOM.render(<ShowMovieByMultiplex />, document.getElementById('root'));
        // }
    }

    render() {
        return (
            <div className="container-body" id="showallmm">
                <div className="container" id="showmm">
                    <h1>Multiplex </h1>
                    <table className="table tabble-striped " id="tablemultiplex">
                        <thead>
                            <tr>

                                <th>S.NO</th>
                                <th>Multiplex Name</th>
                                <th>Click to Delete</th>
                                {/*  <th>MovieType</th> */}


                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Multiplex.map(x =>
                                <tr className="text-black">


                                    <td id="mid">{x.multiplexId}</td>
                                    <td>{x.multiplexName}</td>


                                    <td><input type="radio" name="rbSelect" style={{ padding: 0, appearance: 'radio' }} value="Select" onChange={this.Show} /></td>
                                    {/* <td>{x.movieType}</td> */}



                                </tr>
                            )}
                            <tr><Link to="/ApplicationOwnerDashboard">
                            <button className="btn btn-link">Dashboard</button>
                            </Link> </tr>
                        </tbody>
                    </table>
                    <hr>
                    </hr>

                </div>
            </div>
        );
    }
}