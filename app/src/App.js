import './App.css';
import Index from './Pages/Index';
import './Pages/Index';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from 'react';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component = { Index }/>
          <Route component = { Index }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// import './App.scss';
// import './Pages/Index';
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import Index from './Pages/Index'
// import Error from './Pages/Error'
// import GoalPage from './Pages/GoalPage'
// import React, {useState, useEffect} from 'react';

// const [loading, setLoading] = useState(false);

// useEffect(() =>{
//   setLoading(true)
//   setTimeout(() => {
//     setLoading(false)
//   }, 3000)
// }, [])

// function App() {
//   return (
//     <div className = "App">
//       <Router>
//         <Switch>
//             <Route exact path = "/" component = { Index }/>
//             <Route exact path = "/goal" component = { GoalPage }/>
//             <Route component = { Index }/>
//             {/* <Route component = { Error }/> */}
//             <Redirect to = "/404"/>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

