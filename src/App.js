import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './components/context/AuthProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import LearnerSignUp from './components/SignUp/LearnerSignUp';
import RiderSignUp from './components/SignUp/RiderSignUp';
import RiderProfile from './components/RiderProfile/RiderProfile';
import Services from './components/Services/Services';
import Navigation from './components/Shared/Navigation/Navigation';
import Footer from './components/Shared/Footer/Footer';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Booking from './components/Booking/Booking';
import NotFound from './components/notFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminRoute from './components/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home></Home>}>
            </Route>
            <Route path='/home' element={<Home></Home>}>
            </Route>
            <Route path='/login' element={<Login></Login>}>
            </Route>
            <Route path='/riderSignup' element={<RiderSignUp></RiderSignUp>}>
            </Route>
            <Route path='/learnerSignup' element={<LearnerSignUp></LearnerSignUp>}>
            </Route>
            <Route path='/riderProfile' element={<PrivateRoute>
              <RiderProfile />
            </PrivateRoute>}>
            </Route>
            <Route path='/services' element={<Services></Services>}>
            </Route>
            <Route path='/adminPanel' element={<AdminRoute><AdminPanel></AdminPanel></AdminRoute>}>
            </Route>
            <Route path='/selectedservice/:serviceId' element={<PrivateRoute><Booking></Booking></PrivateRoute>}>
            </Route>
            <Route path='*' element={<NotFound/>}>
            </Route>
          </Routes>
          <Footer></Footer>
        </Router>
      
      </AuthProvider>
    </div>
   
  );
}

export default App;
