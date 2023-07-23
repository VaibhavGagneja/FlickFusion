import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Responsive from './Pages/Homedashboard1';
import ChangePassword from './Components/ChangePass';
import LoginFormUser from './Components/LoginFormUser';
import AddMovie from './Components/AddMovie';
import ForgotPassword from './Components/ForgotPass';
import AddFeedback from './Components/AddFeedback';
import ShowAllScreen from './Components/ShowAllScreen';
import AddMultiplex from './Components/AddMultiplex';
import AddScreen from './Components/AddScreen';
import ShowAllTickets from './Components/ShowAllTickets';
import CustomerDashBoard from './Pages/CustomerDashBoard';
import AddTicket from './Components/AddTickets';
import ShowAllMultiplex from './Components/ShowAllMultiplex';
import ShowTicket from './Components/ShowTicketByMobileNumber';
import ShowCustomer from './Components/ShowCustomer';
import BookTicket from './Components/BookTicket';
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
import RegisterUserTab from './Components/RegisterUser';
import LoginLogout from './Components/LoginLogout';
import NavBarConditional from './Components/NavBarConditional';

function App() {
  return (
    <div>
      <Router>
        <NavBarConditional />
        <Routes>
          <Route path="/" element={<Responsive />} />
          <Route path="/changepass" element={<ChangePassword />} />
          <Route path="/adduser" element={<RegisterUserTab />} />
          <Route path="/login" element={<LoginLogout />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/addfeedback" element={<AddFeedback />} />
          <Route path="/showallscreen" element={<ShowAllScreen />} />
          <Route path="/addmultiplex" element={<AddMultiplex />} />
          <Route path="/addscreen" element={<AddScreen />} />
          <Route path="/showalltickets" element={<ShowAllTickets />} />
          <Route path="/customerdashboard" element={<CustomerDashBoard />} />
          <Route path="/addticket" element={<AddTicket />} />
          <Route path="/showallmultiplex" element={<ShowAllMultiplex />} />
          <Route path="/showallfeedbackcust" element={<ShowAllFeedbackCust />} />
          <Route path="/showticketbymobno" element={<ShowTicket />} />
          <Route path="/showcustomer" element={<ShowCustomer />} />
          <Route path="/showallfeedback" element={<ShowAllFeedback />} />
          <Route path="/bookticket" element={<BookTicket />} />
          <Route path="/showmoviebymultiplex" element={<ShowMovieByMultiplex />} />
          <Route path="/showtable" element={<ShowTable />} />
          <Route path="/showallmovie" element={<ShowAllMovie />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/showallmultiplexowner" element={<ShowAllMultiplexOwner />} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
          <Route path="/applicationownerdashboard" element={<ApplicationOwnerDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
