import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
// import '../Home/style.css';
class AddTicket extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ttype: '',
            quant: '',
            time:'',
            // multiplex_id: '',
            screen_id:'',
            movie_id:'',
            mobno:sessionStorage.getItem("MobileNumber")
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
        const ticket = {
            CreatedAt:this.state.time,
            TicketType: this.state.ttype,
            Quantity: parseInt(this.state.quant),
            ScreenId: parseInt(this.state.screen_id),
            MovieId: parseInt(this.state.movie_id),
            // MultiplexId: parseInt(this.state.multiplex_id),
            MobileNo:parseInt(this.state.mobno)
        };
        console.log(ticket);
        Axios.post("http://localhost:5155/api/TicketAPI/AddTicket", ticket).then(
            r => {
               
                if (r) {
                    alert("New ticket Added");
                }
            });
        event.preventDefault();
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="container back">
                <br></br><br></br>
                <form className="was-validated" onSubmit={this.ShowData}>
                    <h2 className="h2">Add Ticket</h2>
                    <br></br><br></br>
                    <div className="form-group">
                        <label>Select Ticket Type</label>
                        <select name="ttype" required onInput={this.GetData}>
                            <option value="">Select</option>
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Premium">Premium</option>
                        </select>
                        <div className="invalid-feedback">Ticket Type cannot be blank.</div>
                    </div>
                    <br></br>
                    
                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" className="form-Control" placeholder="No of tickets to book"
                            required name="quant" onInput={this.GetData} />
                        <div className="invalid-feedback"> This field cannot be blank.</div>
                    </div>
                    <div className="form-group">
                        <label>Ticket Created at</label>
                        <input type="datetime-local" className="form-Control" placeholder="Time cannot be blank"
                            required name="time" onInput={this.GetData} />
                        <div className="invalid-feedback"> This field cannot be blank.</div>
                    </div>
                    <br></br>
                    
                    {/* <div className="form-group">
                        <label>Enter Multiplex Id</label>
                        <input type="number" className="form-Control" placeholder="Enter Multiplex Id"
                            required name="multiplex_id" onInput={this.GetData}></input>
                        <div className="invalid-feedback"> multiplex Id cannot be blank.</div>
                    </div> */}
                    <div className="form-group">
                        <label>Enter Screen Id</label>
                        <input type="number" className="form-Control" placeholder="Enter screen Id"
                            required name="screen_id" onInput={this.GetData}></input>
                        <div className="invalid-feedback"> screen Id cannot be blank.</div>
                    </div>
                    <div className="form-group">
                        <label>Enter Movie Id</label>
                        <input type="number" className="form-Control" placeholder="Enter movie Id"
                            required name="movie_id" onInput={this.GetData}></input>
                        <div className="invalid-feedback"> movie Id cannot be blank.</div>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" className="btn btn-success btn-block">Add</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="reset" className="btn btn-danger btn-block">Reset</button>
                    </div>
                    <br></br>
                </form>
            </div>
        );
    }
}
export default AddTicket