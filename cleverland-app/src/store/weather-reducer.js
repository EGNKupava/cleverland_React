const ADD_TO_FAVORIE = 'ADD-TO-FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE';
const SET_LOADING = 'SET-LOADING';
const SET_LOADED = 'SET-LOADED';
const SET_ERROR = 'SET-ERROR';


const initialState = { 
  favorites: [
    { cityName: 'Орша', key: 'Orsha' }
  ],
  weather: {
    isLoading: false,
    isError = false,
    isLoaded = false,
    weather: {},
  },
};

export const weatherReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case ADD_TO_FAVORIE: 
      return {}
    case DELETE_FROM_FAVORITE: 
      return {}
    case SET_LOADING: 
      return {}
    case SET_LOADED: 
      return {}
    case SET_ERROR: 
      return {}
    default : return state
  }
}