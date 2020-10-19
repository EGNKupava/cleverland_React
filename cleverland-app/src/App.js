import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

import ProductList from './components/productList/ProductList';
import { Weather } from './components/weather/weather';
import { addToFavoriteAC, deleteFromFavoriteAC, onShowRequestAC, onShowSuccesAC, onShowFailAC } from './store/weather-reducer'; 

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Link className="logo" to="/">
      <h1 className="main-title">Cleverland Practice</h1>
      </Link>
      <div className="nav-block">
        <NavLink to="/products-list">Список продуктов</NavLink>
        <NavLink to="/weather">Погода</NavLink>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <p className="description">Стартовая страница домашних заданий Cleverland</p>
            <div style={{textAlign: "center"}}>
               <img src="https://cleverland.by/images/ART.png"/>
            </div>
          </Route>
          <Route path="/products-list">
            <ProductList className="ProductList" />
          </Route>
          <Route path="/weather">
            <WeatherContainer />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  weather: state.weather,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToFavorite: (city) => dispatch(addToFavoriteAC(city)),
  onDeleteFromfavorite: (key) => dispatch(deleteFromFavoriteAC(key)),
  onShowRequest: (item) => dispatch(onShowRequestAC(item)),
  onShowSucces: (data) => dispatch(onShowSuccesAC(data)),
  onFail: () => dispatch (onShowFailAC()),
});

let WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default App;
