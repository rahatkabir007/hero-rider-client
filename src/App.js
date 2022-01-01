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
import AdminPanel from './components/AdminPanel/AdminPanel';

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
            <Route path='/riderProfile' element={<RiderProfile></RiderProfile>}>
            </Route>
            <Route path='/services' element={<Services></Services>}>
            </Route>
            <Route path='/adminPanel' element={<AdminPanel></AdminPanel>}>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
   
  );
}

export default App;
