import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../Components/aboutus.css"
class AboutUs extends React.Component{
    render()
    {
        return(
            <div className="contanier-fluid25" id="aboutus">
                <div className="container25" id="about">
                    <h2 className="h22">BOOK MY MOVIE</h2>
                    <p className="p1">Book my movie is an online ticket booking website
                        It is beneficial for both customer and multiplex owner.
                        For the customers we provide attractive discounts and offers 
                        and we have all the famous multiplex chains like PVR, INOX as our partners.
                        <br></br>
                        For the multiplex owners they can list their multiples add the screens and 
                        list the movies in an easy manner
                        This project is authenticated with JWT token for registration </p>
                        <h2  className="h22">Contact Us  </h2>
                        <h6 className="h33" >Vaibhav Gagneja +919996175577  <br></br>
                            Mina Shaw +918335827340 <br></br>
                            Sarthak Kalra +919759228900 </h6>
                        

                   
                </div>
            </div>
        );
    }
}
export default AboutUs