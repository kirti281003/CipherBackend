import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Profile from './components/profile/Profile';
import Follower from './components/follower/Followers';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/user" element={<Profile/>}/>
      <Route path="/followers" element={<Follower/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
