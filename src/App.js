
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddToCart from './Pages/AddToCart/AddToCart';
import Booking from './Pages/Booking/Booking/Booking';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import Dinner from './Pages/Home/Dinner/Dinner';
import Home from './Pages/Home/Home/Home';
import Lunch from './Pages/Home/Lunch/Lunch';
import Login from './Pages/Login/Login/Login';

import NotFound from './Pages/Login/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            {/* <PrivateRoute exact path="/booking/:foodsId">
              <Booking></Booking>
            </PrivateRoute> */}
            <PrivateRoute exact path="/addtocart">
              <AddToCart></AddToCart>
            </PrivateRoute>
            <Route exact path="/booking/:foodsId">
              <Booking></Booking>
            </Route>

            <Route path="/booking/breakfast">
              <Breakfast></Breakfast>
            </Route>
            <Route path="/booking/lunch">
              <Lunch></Lunch>
            </Route>
            <Route path="/booking/dinner">
              <Dinner></Dinner>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            {/* <Route exact path="/loginModal">
              <LoginModal></LoginModal>
            </Route> */}

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
