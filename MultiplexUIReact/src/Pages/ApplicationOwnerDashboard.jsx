import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import '../Pages/owner.css';

export class ApplicationOwnerDashboard extends Component {
    render() {
        return (<div className="container-fluid" id="owner">
            <div className='row my-1'>
           <h2 id="ah2"><i>FUNCTIONALITIES </i> </h2>
           <br></br>
           <br></br>
           <div className='col md-3'>
               <div className="card-w-30" >
                   <div className="card-body" id="ownercard">
                       <h3 className="card-title">SHOW ALL MULTIPLEX</h3>
                       <p className="card-text">Select the multiplex, choose the movie you want to watch and book the tickets .</p>
                       <Link to="/ShowAllMultiplexOwner" className="btn btn-dark">SELECT MULTIPLEX </Link>
                   </div>
               </div>
           </div>
           
           <div className='col md-3'><div className="card-w-30">
               <div className="card-body" id="ownercard">
                   <h3 className="card-title">SHOW ALL FEEDBACKS</h3>
                   <p className="card-text">To view all the feedbacks and ratings click on the buytton below.</p>
                   <Link to="/ShowAllFeedback" className="btn btn-dark">SHOW FEEDBACKS</Link>
               </div>
           </div>
           </div>
           <div className='row my-1' id="row-3">
           <h2 id="ah2"><i>OWNER FUNCTIONALITIES</i></h2>
           <br></br>
           <br></br>
           <div className='col md-5'> <div className="card-w-30" >
               
               <div className="card-body" id="ownercard">
               
                   <h4 className="card-title">USER PROFILE</h4>
                   <p className="card-text">To see your profile , click on the button below</p>
                   <Link to="/ShowTable" className="btn btn-dark">GO TO PROFILE</Link>
               </div>
           </div>
           </div>
           <div className='col md-5'> <div className="card-w-30" >
              
               <div className="card-body" id="ownercard">
                   <h4 className="card-title">CHANGE PASSWORD</h4>
                   <p className="card-text">Want to change your password ? Click on the button bellow</p>
                   <Link to="/changepass" className="btn btn-dark">Change</Link>
               </div>
           </div>
           </div>
           </div>
       
        
        
    </div>
    </div>
    
        
            /* // <div>
            //     <nav>
            //         {/* <Router> *
            //         <Link to="/changepass">ChangePass</Link>
            //             <br></br>
            //             <Link to="/showallmultiplex">showallmultiplex</Link>
            //             <br></br>
            //             <Link to="/showallfeedback">showallfeedback</Link>
            //         {/* </Router> */
                
            
        )
    }
}

export default ApplicationOwnerDashboard