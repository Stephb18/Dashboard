import React,{ Component } from 'react';
import LoginContainer from './container/LoginContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import MainRoute from './routes/routes.js'

const MainHome = props => {
  return (
    <div className='container'>
    <div className="col-md-12">

     <LoginContainer {...props} />
    </div>

   </div>
  )
}
class App extends Component {
  render(){
    return(
      <>
      <Router>
        <NavigationBar />
       <Switch>
       <Route path='/' exact component={MainHome}/>
        <Route path='/dashboard' component={MainRoute}/>
       </Switch>
     </Router>
     </>
    )
  }
}


export default App;
