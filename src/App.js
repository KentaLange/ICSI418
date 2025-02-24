import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function MyButton() {
  return (
    <Link to="/Sign_in_HW1">
      <button>Submit</button>
    </Link>
  );
}

function MyButton2() {
  return (
    <Link to="/">
      <button>Submit</button>
    </Link>
  );
}


function SignUp() {
  return (
    
    <div>
      Sign Up
      
      <body>
        <h1>First Name</h1>
        <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
        <h1>Last Name</h1>
        <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
        <h1>User ID</h1>
        <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
        <h1>Password</h1>
        <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
        <MyButton2 />
       
    </body>
    </div>
    
  );
}

function MainApp() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Sign_in_HW1" element={<SignUp />} />
        </Routes>
      </div>

      <div className="App">
      <header className="App-header">
        <h1>User ID</h1>
        <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
        <h1>Password</h1>
        <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
        <MyButton />
      </header>
    </div>
    </Router>

  );
}

export default MainApp;

