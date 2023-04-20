import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './login';
import SignUp from './signup';
import Add from './add';
import Getcode from './getcode';
import Kgs from './kgs';
function App() {
  return (
    <Router>
      <div className="App">
      <div class="container-fluid">

      <nav class="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="/">KGS Quote Generator</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
              
			  <li className="nav-item">

                  <Link className="nav-link" to={'/'}>
                    KGS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                   Sign up
                  </Link>
				 
                </li>
				
				<li>
				<Link className="nav-link" to={'/get-code'}>
                  See random Quote
                  </Link>
				</li>
        <li>
				<Link className="nav-link" to={'/add'}>
                     Add your Quote
                  </Link>
				</li>
        </ul>
        </div>
      </nav>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Kgs />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
			  <Route path="/add" element={<Add />} />
			  <Route path="/get-code" element={<Getcode />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App;

