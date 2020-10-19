import React from 'react';

const ADD_TO_FAVORIE = 'ADD-TO-FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE';
const ON_SHOW_REQUEST = 'ON-SHOW-REQUEST';
const ON_SHOW_SUCCESS = 'ON-SHOW-SUCCESS';
const ON_SHOW_FAIL = 'ON-SHOW-FAIL';


const initialState = { 
  favorites: [
    { cityName: 'Orsha', key: 'Orsha' },
    { cityName: 'Minsk', key: 'Minsk' },
  ],
  weather: {
    isLoading: false,
    isError: false,
    isLoaded: false,
    data: {},
  },
};

export const addToFavoriteAC = (city) => ({type: ADD_TO_FAVORIE, city}) ;
export const deleteFromFavoriteAC = (key) => ({type: DELETE_FROM_FAVORITE, key});
export const onShowRequestAC = () => ({type: ON_SHOW_REQUEST});
export const onShowSuccesAC = (weatherData) => ({type: ON_SHOW_SUCCESS, weatherData});
export const onShowFailAC = () => ({type: ON_SHOW_FAIL});

export const weatherPageReduer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORIE: 
      let cityContain = false;
      state.favorites.forEach(item => {
      if (item.cityName === action.city) cityContain = true;
      });
      if (!cityContain) {
        let item = {
          cityName: action.city,
          key: action.city,
        }
        return {...state,
          favorites: [...state.favorites, item]
        }
      }
      
    case DELETE_FROM_FAVORITE:
      const filteredCities = state.favorites.filter(item => item.key !== action.key);
      return {...state, 
        favorites: filteredCities}
    case ON_SHOW_REQUEST: 
      return {...state,
      weather: {...state.weather, isLoading: true}}
    case ON_SHOW_SUCCESS: 
      return {...state,
        weather: {...state.weather,
          isLoaded: true,
          isLoading: false,
          data: action.weatherData}}
    case ON_SHOW_FAIL: 
      return  {...state,
        weather: {...state.weather, 
          isError: true,
          isLoading: false,
          isLoaded: false}}
    default : return state
  }
}