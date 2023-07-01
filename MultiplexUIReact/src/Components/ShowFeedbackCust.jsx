import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './stylefeedback.css';
import { Link } from "react-router-dom";
export default class ShowAllFeedbackCust extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            Feedback:[],
           
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5155/api/FeedbackAPI/ShowAllFeebacks").then(r=>{
           // http://localhost:5155/api/FeedbackAPI/ShowAllFeebacks
            //console.log(r.data);
           
            this.setState({Feedback:r.data});
        })
    }
    Show=(e)=>
    {

        alert('Clicked on this row');
        var rb=document.getElementsByName("rbSelect");
        var table=document.getElementById("test");
   
   
        
        let mno=0;
     /*    for(var i=0;i<rb.length;i++)
         {
             if(rb[i].checked)
             {
              
               mno=table.rows[i+1].cells.item(1).innerHTML;
               table.deleteRow(i+1);
            }
            console.log(mno);
           }
       alert("Mobile No:"+mno);
     
   Axios.delete("http://localhost:5155/api/FeedbackAPI/DeleteFeedback/"+mno).then(r=>{
       console.log(r);

if(r)
{
    alert("Data Deleted");
 
  

   }
});*/


}


    render()
    {
        return(
            <div className="containerfeed-body">
            <div className="containerfeed">
       <h1>Show All Feedbacks</h1>
       <table className="table table-striped " id="test">
           <thead>
           <tr >
       
           <th>FeedbackId</th>
               <th>Mobile Number</th>
               <th>Feedback</th>
               <th>Rating</th>
               
                </tr>
           </thead>
           <tbody>

               {this.state.Feedback.map(x=>
                <tr className="table-danger">
                   
                    <td >{x.feedBackId}</td>
                    <td    id="mno">{x.mobileNo}</td>
                    <td>{x.feedBack}</td>
                    
                    
                    <td >{x.rating}</td>
                    
                    
                    
                 </tr>
                )}
           </tbody>
       </table>
       <Link to="/CustomerDashBoard">
                        <button id="" className='btn btn-dark' >Dashboard</button>
                    </Link >
       <hr>
       </hr>
       
       </div>
       </div>
        );
}
}