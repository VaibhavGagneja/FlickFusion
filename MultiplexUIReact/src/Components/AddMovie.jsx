import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import './addmoviescreen.css';
import { BiMoviePlay } from "react-icons/bi";
import { GiDuration } from "react-icons/gi";
import { IoLanguageOutline } from "react-icons/io5";
import { FaDiceD6 } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
// import movie1 from '../Images/movie1.png';
//import movie2 from '../Images/movie2.jpg';
import movie3 from '../Images/movie3.png'
import { Link } from "react-router-dom";
// import '../Home/style.css';
class AddMovie extends React.Component {
    state = {
        file: null,
        base64URL: ""
    }
    constructor(props) {
        super(props);
        this.state = {
            mname: '',
            mdesc: '',
            mlan: '',
            mimg: '',
            mdur: '',
            mtype: '',
            // price: '',
            // screen_id: ''
        }
    }
    //var name=document.getElementsByName[0].value;
    //var name=document.getElementById.value;
    GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    getBase64 = file => {
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
    };
    ShowData = (event) => {
        const movie = {
            movieName: this.state.mname,
            movieDescription: this.state.mdesc,
            movieLanguage: this.state.mlan,
            movieImage: this.mimg,
            movieDuration: this.state.mdur,
            movieType: this.state.mtype,
            // Price: parseFloat(this.state.price),
            // ScreenId: parseInt(this.state.screen_id),

            Ticket: [],
            Screen: []
        };
        console.log(movie);
        Axios.post("http://localhost:5155/api/MovieAPI/AddMovie", movie).then(
            r => {
                if (r) {
                    alert("New Movie Added");
                }
            });
        event.preventDefault();
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="container-body" id="addmovieouter">
                <div className="container" id="addmovieinner">

                    <form className="was-validated" onSubmit={this.ShowData}>
                        <div className="row my-1">

                            <div className="col md-4" id="c1">
                                <h2 className="h2"><i>Add New Movie</i></h2>
                                <br></br>
                                <div className="form-group">
                                    <label id="label4"><BiMoviePlay /></label>
                                    <input type="text" className="form-Control" placeholder="Enter Movie Name"
                                        required name="mname" onInput={this.GetData} />
                                    <div className="invalid-feedback"></div>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label id="label4">< MdOutlineDescription />  </label>
                                    <input type="text" className="form-Control" placeholder="Enter Movie Desc"
                                        required name="mdesc" onInput={this.GetData} />
                                    <div className="invalid-feedback"></div>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label id="label4"><IoLanguageOutline /></label>
                                    <select name="mlan" required onInput={this.GetData}>
                                        <option value="">Select Language</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="English">English</option>
                                    </select>
                                    <div className="invalid-feedback"></div>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label id="label5">Upload Image </label>
                                    <input type="file" className="form-Control" placeholder="Select Img file to upload"
                                        required name="file" id="file" accept=".png,.jpeg,.jpg,.gif" onChange={this.handleFileInputChange} />
                                    <div className="invalid-feedback"></div>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label id="label4">< GiDuration /> </label>
                                    <input type="text" className="form-Control" placeholder="Enter Movie Duration"
                                        required name="mdur" onInput={this.GetData} />
                                    <div className="invalid-feedback"> </div>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label id="label4"><FaDiceD6 /> </label>
                                    <select name="mtype" required onInput={this.GetData}>
                                        <option value="">Select Movie Type</option>
                                        <option value="3D">3D</option>
                                        <option value="2D">2D</option>
                                    </select>
                                    <div className="invalid-feedback"></div>
                                </div>
                                <br></br>
                                {/* <div className="form-group">
                        <label id="label4"></> Enter Price</label>
                        <input type="number" className="form-Control" placeholder="Enter Product Price"
                            required name="price" onInput={this.GetData}></input>
                        <div className="invalid-feedback">Please Product Price. It cannot be blank.</div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label id="label4"></> Enter Screen Id</label>
                        <input type="number" className="form-Control" placeholder="Enter Scrren Id"
                            required name="screen_id" onInput={this.GetData}></input>
                        <div className="invalid-feedback">Enter Screen Id cannot be blank.</div>
                    </div> */}

                                <div style={{ display: 'flex', width: '20vw' }}>
                                    <button type="submit" id="submit">Add Movie</button>
                                    &nbsp;&nbsp;
                                    <button type="reset" id='submit'>Reset </button>
                                    &nbsp;&nbsp;
                                    <Link  to="/AdminDashBoard">
                                        <button id="submit" className="">Dashboard</button>
                                    </Link>
                                </div>
                                <br></br></div>
                            <div className="col md-5">
                                <img
                                    src={movie3}
                                    width={100}
                                    height={350}
                                    className="card-img-top"
                                    alt="..." />
                            </div>
                        </div>
                     
                    </form>
                </div>
            </div>
        );
    }
}
export default AddMovie;