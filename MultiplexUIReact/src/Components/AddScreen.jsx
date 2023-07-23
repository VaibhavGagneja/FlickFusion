import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import './addmoviescreen.css';
import movie4 from '../Images/movie4.png';
import { Link } from "react-router-dom";
// import '../Home/style.css';

class AddScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sname: '',
            numbers: '',
            multiplex_id: '',
            movie_id: '',
        }
    }
    //var name=document.getElementsByName[0].value;
    //var name=document.getElementById.value;
    GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    /* { getBase64 = file => {
          return new Promise(resolve => {
              let fileInfo;
              let baseURL = "";
              // Make new FileReader
              let reader = new FileReader();
              // Convert the file to base64 text
              reader.readAsDataURL(file);
              // on reader load somthing...
              reader.onload = () => {
                  // Make a fileInfo Object
                  //console.log("Called", reader);
                  baseURL = reader.result;
                  console.log(baseURL);
                  resolve(baseURL);
                  this.mimg = baseURL;
              };
          });
      };
      handleFileInputChange = e => {
          let { file } = this.state;
          file = e.target.files[0];
          this.getBase64(file)
              .then(result => {
                  file["base64"] = result;
                  //console.log("File Is", file);
                  this.setState({
                      base64URL: result,
                      file
                  });
              })
              .catch(err => {
                  console.log(err);
              });
          this.setState({
              file: e.target.files[0]
          });
      };*/
    ShowData = (event) => {
        const screen = {
            ScreenName: this.state.sname,
            totalseats: parseInt(this.state.numbers),
            MultiplexId: parseInt(this.state.multiplex_id),
            MovieId: parseInt(this.state.movie_id),
            Ticket: []
        };
        console.log(screen);
        Axios.post("http://localhost:5155/api/ScreenAPI/AddScreen", screen, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
        }).then(
            r => {
                if (r) {
                    alert("New screen Added");
                }
            });
        event.preventDefault();
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="container-body" id="addscreenouter">
                <div className="container" id="addscreeninner">
                    <form className="was-validated" onSubmit={this.ShowData}>
                        <div className="row my-1">
                        <div className="col md-5">
                                <img
                                    src={movie4}
                                    width={100}
                                    height={350}
                                    className="card-img-top"
                                    alt="..." />
                            </div>
                            <div className="col md-2">
                                <h2 className="h2"><i>Add New Screen</i></h2>
                
                                <div className="form-group">
                                    <label>Screen Name</label>
                                   <div> <input type="text" className="form-Control" placeholder="Enter screen Name"
                                        required name="sname" onInput={this.GetData} /></div>
                                    {/* <div className="invalid-feedback"> Screen Name cannot be blank.</div> */}
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Total Seats</label>
                                   <div> <input type="number" className="form-Control" placeholder="Enter no of seats"
                                        required name="numbers" onInput={this.GetData} /></div>
                                    {/* <div className="invalid-feedback"> This field cannot be blank.</div> */}
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Enter Multiplex Id</label>
                                   <div> <input type="number" className="form-Control" placeholder="Enter Multiplex Id"
                                        required name="multiplex_id" onInput={this.GetData}></input></div>
                                    {/* <div className="invalid-feedback">Enter multiplex Id cannot be blank.</div> */}
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Enter Movie Id</label>
                                    <div><input type="number" className="form-Control" placeholder="Enter Movie Id"
                                        required name="movie_id" onInput={this.GetData}></input></div>
                                    {/* <div className="invalid-feedback">Enter Screen Id cannot be blank.</div> */}
                                </div>
                                <br></br>
                                <div>
                                    <button type="submit" id="submit">Add Screen</button>
                                    &nbsp;&nbsp;
                                    <button type="reset" id="submit">Reset</button>
                                    &nbsp;&nbsp;
                                    <Link  to="/AdminDashBoard">
                                        <button id="submit" className="">Dashboard</button>
                                    </Link>
                                </div>
                                <br></br>
                            </div>
                            
                        </div>
                       
                    </form>
                </div>
            </div>
        );
    }
}
export default AddScreen