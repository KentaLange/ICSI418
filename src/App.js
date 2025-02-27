import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Function that generates a button that links to the Sign_in_HW1 page
function MyButton() {
  return (
    <Link to="/Sign_in_HW1">
      <button class="buttonStyle">Submit</button>
    </Link>
  );
}
//Function that generates a button that links to the Log in page
function MyButton2() {
  return (
    <Link to="/">
      <button class="buttonStyle">Submit</button>
    </Link>
  );
}

//Function that generates the Sign Up page
function SignUp() {
  return (
    
    //User ID, Last Name, First Name, and Password fields
    //Submit button that links to the Log in page
    <div>
      <div class="p-3 mb-2 bg-primary text-white">This is our Sign up page</div>

      <div className="App">
        <header className="App-header">
          <h1>First Name</h1>
          <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
          <h1>Last Name</h1>
          <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
          <h1>User ID</h1>
          <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
          <h1>Password</h1>
          <textarea id="w3review" name="w3review" rows="2" cols="50"></textarea>
          <MyButton2 />
        </header>
      </div>
    </div>
    
  );
}

//Function that generates the Log in page
function MainApp() {
  //User ID and Password fields
  //Submit button that links to the Sign Up page
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Sign_in_HW1" element={<SignUp />} />
        </Routes>
      </div>
      <div class="p-3 mb-2 bg-primary text-white">This is our Log in page</div>
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

