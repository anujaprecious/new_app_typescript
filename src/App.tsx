import "./App.css";
//import HomePage from './pages/HomePage'
import AboutPage from "./pages/AboutPage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import { Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
//import DashboardPage from "./pages/DashboardPage"
//import ProfilesettingPage from "./pages/ProfilesettingPage";
import ContactForm from "./pages/ContactForm";
//import Settingpage from "./pages/Settingpage";

function App() {
  return (
<>
<BrowserRouter>
    <Routes>

    <Route  path='/' element={<HomePage/>}></Route>
    <Route path='/AboutPage' element={<AboutPage/>}></Route>
    <Route  path='/SignupPage' element={<SignupPage/>}></Route>
    <Route  path='/LoginPage' element={<LoginPage/>}></Route>
    {/* <Route exact path='/DashboardPage' element={<DashboardPage/>}></Route>
    <Route exact path='/ProfilesettingPage' element={<ProfilesettingPage/>}></Route> */}
    <Route  path='/ContactForm' element={<ContactForm/>}></Route>
    {/* <Route exact path='/Settingpage' element={<Settingpage/>}></Route>
    <Route exact path='/Profilesettingpage' element={<ProfilesettingPage/>}></Route> */}
    </Routes>
    </BrowserRouter>

</>
);
}

export default App;
