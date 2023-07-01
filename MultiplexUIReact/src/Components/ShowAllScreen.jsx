import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import './styleshowscreen.css';
import { Link } from "react-router-dom";

export default class ShowAllScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Screen: [],
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5155/api/ScreenAPI/ShowAllScreen").then(r => {
            //console.log(r.data);
            this.setState({ Screen: r.data });
        })
    }
    Show = (e) => {
        alert('Clicked on this row');
        var rb = document.getElementsByName("rbSelect");
        var table = document.getElementById("test");
        let sid = document.getElementsByName("sid");
        //  for(var i=0;i<rb.length;i++)
        //  {
        //      if(rb[i].checked)
        //      {
        //        sid=table.rows[i+1].cells.item(1).innerHTML;
        //        table.deleteRow(i+1);
        //      }
        //    }
        alert("ScreenId:" + sid);
        //    Axios.delete("http://localhost:5155/api/ScreenAPI/DeleteScreen/"+sid).then(r=>{
        //        console.log(r);
        // if(r)
        // {
        //     alert("Data Deleted");
        //    }
        // });
    }
    render() {
        return (
            <div className="cant41">
                <div className="container41" >
                    <h1>Show All Screens</h1>
                    <table className="table  ">
                        <thead>
                            <tr >
                                {/* <th>Click to Delete</th> */}
                                <th>ScreenId</th>
                                <th>MovieName</th>
                                <th>MovieType</th>
                                <th>MultiplexId</th>
                                <th>MultiplexName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Screen.map(x =>
                                <tr >
                                    {/* <td><input type="radio" name="rbSelect" value="Select" onChange={this.Show}/></td> */}
                                    <td name="sid">{x.screenId}</td>
                                    <td>{x.movieName}</td>
                                    <td>{x.movieType}</td>
                                    <td>{x.multiplexId}</td>
                                    <td>{x.multiplexName}</td>
                                </tr>
                            )}
                            <tr>

                            </tr>
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