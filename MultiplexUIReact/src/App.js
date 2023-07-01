import logo from './logo.svg';
// import './App.css';
import LoginFormUser from './Components/LoginFormUser';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ChangePassword from './Components/ChangePass';
import AddMovie from './Components/AddMovie';
import ForgotPassword from './Components/ForgotPass';
import AddFeedback from './Components/AddFeedback';
import ShowAllScreen from './Components/ShowAllScreen';
import AddMultiplex from './Components/AddMultiplex';
import AddScreen from './Components/AddScreen';
import ShowAllTickets from './Components/ShowAllTickets';
import AddTicket from './Components/AddTickets';
import ShowAllMultiplex from './Components/ShowAllMultiplex';
import ShowTicket from './Components/ShowTicketByMobileNumber';
import ShowCustomer from './Components/ShowCustomer';
import BookTicket from './Components/BookTicket';
import CustomerDashBoard from './Pages/CustomerDashBoard';
import NavBar from './Components/Navbar';
import RegisterUser2 from './Components/RegisterUser2';
// import Home from './Components/Home/Home';
// import Admindash from './Components/admindashboard/Admindash';
import Responsive from './Pages/Homedashboard1';
import Footer from './Components/Footer';
import ShowMovieByMultiplex from './Components/ShowMovieByMultiplex';
import ShowAllFeedbackCust from './Components/ShowFeedbackCust';
import ShowTable from './Components/ShowTable';
import ShowAllMovie from './Components/ShowAllMovies';
import ShowTableTicket from './Components/ShowTableTicket ';
import ShowAllMultiplexOwner from './Components/Showallmultiplexowner';
import ShowAllFeedback from './Components/ShowAllFeedback';
import AdminDashBoard from './Pages/AdminDashBoard';
import ApplicationOwnerDashboard from './Pages/ApplicationOwnerDashboard';
import AboutUs from './Pages/AboutUs';
import RegisterUser from './Components/RegisterUser';

function App() {
  return (
    <div className="">

      {/* <Responsive/> */}
      {/* <RegisterUser/> */}
      <Router>
        <NavBar />
        <div>
          <Routes>

            <Route exact path='/' element={<Responsive />}></Route>
            <Route path='/changepass' element={<ChangePassword />}></Route>
            <Route path='/adduser' element={<RegisterUser2 />}></Route>
            <Route path='/Login' element={<LoginFormUser />}></Route>
            <Route path='/AddMovie' element={<AddMovie />}></Route>
            <Route path='/forgotpass' element={<ForgotPassword />}></Route>
            <Route path='/addfeedback' element={<AddFeedback />}></Route>
            <Route path='/showallscreen' element={<ShowAllScreen />}></Route>
            <Route path='/addmultiplex' element={<AddMultiplex />}></Route>
            <Route path='/addscreen' element={<AddScreen />}></Route>
            <Route path='/showalltickets' element={<ShowAllTickets />}></Route>
            <Route path='/CustomerDashboard' element={<CustomerDashBoard />}></Route>
            <Route path='/addticket' element={<AddTicket />}></Route>
            <Route path='/showallmultiplex' element={<ShowAllMultiplex />}></Route>
            <Route path='/showallfeedbackcust' element={<ShowAllFeedbackCust />}></Route>
            <Route path='/showticketbymobno' element={<ShowTicket />}></Route>
            {/* <Route path='/ShowAllMovie' element={<ShowMovieByMultiplex />}></Route> */}
            <Route path='/ShowCustomer' element={<ShowCustomer />}></Route>
            <Route path='/ShowAllFeedback' element={<ShowAllFeedback />}></Route>
            <Route path='/BookTicket' element={<BookTicket />}></Route>
            <Route path='/showmoviebymultiplex' element={<ShowMovieByMultiplex />}></Route>
            <Route path='/ShowTable' element={<ShowTable />}></Route>
            <Route path='/ShowAllMovie' element={<ShowAllMovie />}></Route>
            <Route path='/AboutUs' element={<AboutUs />}></Route>
            {/* <Route path='/ShowTableTicket' element={<ShowTableTicket />}></Route> */}
            <Route path='/ShowAllMultiplexOwner' element={<ShowAllMultiplexOwner />}></Route>
            <Route path='/AdminDashBoard' element={<AdminDashBoard />}></Route>
            <Route path='/ApplicationOwnerDashboard' element={<ApplicationOwnerDashboard />}></Route>
            <Route path='/CustomerDashBoard' element={<CustomerDashBoard />}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>

    </div >




  );
}

export default App;
