import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import LogIn from './components/LogIn/LogIn';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import LandingPage from './components/pages/LandingPage';
import SignUp from './components/SignUp/SignUp';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Account from './components/Account/Account';
import Feedback from './components/Account/Feedback';
import StartPage from './components/StartPage/StartPage';
import InterviewPrep from './components/InterviewPrep/InterviewPrep';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';
import InterviewQuestion from './components/InterviewPrep/InterviewQuestion';
import ResetPass from './components/ForgetPassword/ResetPass';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Routes>
          <Route path='/login' element={<LogIn/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/account' element={<Account/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/interview' element={<InterviewPrep/>}/>
          <Route path='/experience' element={<ProfessionalExperience/>} />
          <Route path='/question' element={<InterviewQuestion/>} />
          <Route exact path='/resetPassword' element={<ResetPass />} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
