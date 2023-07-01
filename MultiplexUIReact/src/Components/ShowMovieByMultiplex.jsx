import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import ReactDOM from 'react-dom';

import BookTicket from "./BookTicket";
import { Link } from "react-router-dom";
export default class ShowMovieByMultiplex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Movie: [],
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5155/api/ScreenAPI/GetScreenByMuxId/" + sessionStorage.getItem("MultiplexId")).then(r => {
            //console.log(r.data);
            this.setState({ Movie: r.data });
        })
    }
    Show = (e) => {
        alert('Proceeding to book tickets ');
        var rb = document.getElementsByName("rbSelect");
        var table = document.getElementById("tablemultiplex");
        let mid = 0;
        let sid = 0;
        for (var i = 0; i < rb.length; i++) {
            if (rb[i].checked) {
                mid = table.rows[i + 1].cells.item(0).innerHTML;
                sid = table.rows[i + 1].cells.item(3).innerHTML;
                sessionStorage.setItem("MovieId", mid)
                sessionStorage.setItem("ScreenId", sid)
                alert("Movie ID :" + mid + "\n" + "Audi Number :" + sid)
            }
        }
        //    alert("MovieID:"+mid);
        //    Axios.delete("http://localhost:5155/api/MovieAPI/DeleteMovie/"+mid).then(r=>{
        //        console.log(r);
        // if(r)
        // {
        //     alert("Data Deleted");
        //    }
        if (mid !== '' && sid !== '') {
            ReactDOM.render(<BookTicket />, document.getElementById('root'));

        }
        // });
    }
    render() {
        return (
            <div className="container-body" id="showallmm">

                <div className="container" id="showmm">
                    <h1>Show All Movies</h1>
                    <table className="table " id="tablemultiplex">
                        <thead>
                            <tr>
                                {/* <th>Click to Delete</th> */}
                                <th>S NO.</th>
                                {/* <th>Movie Name</th>
                            <th>Movie Description</th>
                            <th>Movie Language</th>
                            <th>Movie Image</th>
                            <th>Movie Duration</th>
                            <th>Movie Type</th> */}

                                <th>Movie Image</th>
                                <th> Description</th>

                                <th>Audi Number</th>
                                <th>Select Movie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Movie.map(x =>
                                <tr>
                                    {/* <td><div className="card" style={{width: "12rem"}}>
                                <img src={x.movieImage} width={150} height={150} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.movieName}</h5>
                                        <div> Language: {x.movieLanguage} </div>
                                        <div> Duration : {x.movieDuration} </div>
                                        <div> Type :  {x.movieType}  </div>
                                         <input type="button" className="btn btn-primary" name="rbSelect" value="Book Tickets" onClick={this.Show} />
                                    </div>
                                </div></td>
                                <td></td>
                                <td></td> */}
                                    <td id="mid">{x.movieId}</td>
                                    <td><img src={x.movieImage} width={150} height={150} alt="" />
                                    </td>
                                    <td> <div className="card" style={{ width: "11rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">NAME : {x.movieName}</h5>
                                            <div> Language: {x.movieLanguage} </div>
                                            <div> Duration : {x.movieDuration} </div>
                                            <div> Type :  {x.movieType}  </div>
                                        </div>
                                    </div></td>

                                    {/* <td id="mid">{x.movieId}</td>
                                <td><div className="card" style={{width: "12rem"}}>
                                <img src={x.movieImage} width={150} height={150} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.movieName}</h5>
                                        <div> Language: {x.movieLanguage} </div>
                                        <div> Duration : {x.movieDuration} </div>
                                        <div> Type :  {x.movieType}  </div>
                                         <input type="button" className="btn btn-primary" name="rbSelect" value="Book Tickets" onClick={this.Show} />
                                    </div>
                                </div></td> */}
                                    {/* <td><td>{x.movieName}</td>
                                <td>{x.movieDescription}</td>
                                
                                <td>{x.movieDuration}</td> 
                                <td>{x.movieType}</td>*/}


                                    {/* <td><img src={x.movieImage} width={150} height={150} alt="" />
                                </td> */}
                                    <td>{x.screenId}</td>
                                    {/* <td><input type="button" className="btn btn-primary" name="rbSelect" value="Book Tickets" onChange={this.Show} /></td> */}
                                    <td><input type="radio" style={{ padding: 0, appearance: 'radio', width: 'auto' }} name="rbSelect" value="Select" onChange={this.Show} /></td>
                                </tr>
                            )}

                    {/* <Link to="/showallmultiplex">
                        <button className='btn btn-dark' >Dashboard</button>
                    </Link> */}
                        </tbody>
                    </table>
                    <hr>
                    </hr>
                </div>
            </div>
        );
    }
}