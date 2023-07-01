import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import "../Components/showallmultimovie.css";
import { Link } from "react-router-dom";
export default class ShowAllMovie extends React.Component

{
    constructor(props)
    {
        super(props);
        this.state={
            Movie:[],
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5155/api/MovieAPI/ShowAllMovies").then(r=>{
            //console.log(r.data);
            this.setState({Movie:r.data});
        })
    }
    Show=(e)=>
    {
        alert('Clicked on this row');
        var rb=document.getElementsByName("rbSelect");
        var table=document.getElementById("tablemultiplex");
        let mid=0;
         for(var i=0;i<rb.length;i++)
         {
             if(rb[i].checked)
             {
               mid=table.rows[i+1].cells.item(0).innerHTML;
               table.deleteRow(i+1);
             }
           }
       alert("MovieID:"+mid);
   Axios.delete("http://localhost:5155/api/MovieAPI/DeleteMovie/"+mid).then(r=>{
       console.log(r);
if(r)
{
    alert("Data Deleted");
   }
});
}
    render()
    {
        return(
            <div className="container-body" id="showallmm">
            <div className="container" id="showmm">
       <h1>Show All Movies</h1>
       <table className="table text-black" id="tablemultiplex">
           <thead>
           <tr>
           
           <th>Movie Id</th>
               <th>Movie Name</th>
               <th>Movie Description</th>
               <th>Movie Language</th>
               <th>Movie Image</th>
               <th>Movie Duration</th>
               <th>Movie Type</th>
               <th>Click to Delete</th>
               {/* <th>Price</th> */}
               {/* <th>ScreenId</th> */}
           </tr>
           </thead>
           <tbody>
               {this.state.Movie.map(x=>
                <tr>
                   
                    <td id="mid">{x.movieId}</td>
                    <td>{x.movieName}</td>
                    <td>{x.movieDescription}</td>
                    <td>{x.movieLanguage}</td>
                    <td>
                        <img src={x.movieImage}  width={150} height={150} alt="" />
                        </td>
                    <td>{x.movieDuration}</td>
                    <td>{x.movieType}</td>
                    <td><input type="radio" style={{padding:0,appearance:'radio'}} name="rbSelect" value="Select" onChange={this.Show}/></td>
                    {/* <td>{x.Price}</td> */}
                    {/* <td>{x.screenId}</td> */}
                 </tr>
                )}
                {/* <tr>
                </tr> */}
           </tbody>
       </table>
                <Link to="/AdminDashBoard">
                        <button  className="btn btn-dark">Dashboard</button>
                        </Link>
       <hr>
       </hr>
       </div>
       </div>
        );
}
}