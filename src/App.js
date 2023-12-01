import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home.component';
import Recipe from './components/recipe.component';
import Upload from './components/upload.component';
import Team from './components/team.component';
import Contact from './components/contact.component';
import GDLogo from './components/images/GDLogo.jpg';
// -------------------
import { Login, Logout } from './routes/authRoutes';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/profile.component'; 
// -------------------
function App() {
// -------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
// -------------------
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={GDLogo} alt="Company Logo" style={{ width: '150px', marginRight: '150px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="navbar-brand" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand" to="recipe">Recipe</Link>
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand" to="upload">Upload</Link>
            </li>


            <li className="nav-item active">
              {isLoggedIn ? (
                <Link className="navbar-brand" to="/logout" onClick={handleLogout}>Logout</Link>
              ) : (
                <Link className="navbar-brand" to="/Login">Login</Link>
              )}
            </li>


            <li className="nav-item active">
              <Link className="navbar-brand" to="/team">Team</Link>
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand" to="/contact">Contact Us</Link>
            </li>
           
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />

        <Route
          path='/profile' 
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <Profile />
              </PrivateRoute>
              }
                 />
       {/* Public Routes */}
        <Route
        path='/login'
        element={<Login onLogin={handleLogin} />}
        />
        <Route
          path='/logout' 
          element={<Logout onLogout={handleLogout} />}
        />
        </Routes>
       
    
    </Router>
  );
}

export default App;
