var redux = require('redux');

//Name reducer and action generators


var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
    return action.name;
    default:
    return state;
  }
};
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};
//Hobbies reducer and action generators
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
    return [
      ...state,
      {
        id: nextHobbyId++,
        hobby: action.hobby
      }
    ];
    case 'REMOVE_HOBBY':
    return state.filter((hobby) => hobby.id !==action.id);
    default:
    return state;
  }
};
var addHobby = (hobby) => {
  return {
    hobby,
    type: 'ADD_HOBBY'
  };
};
var removeHobby = (id) => {
  return {
    id,
    type: 'REMOVE_HOBBY'
  };
};

//Movies reducer and action generators
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
    return [
      ...state,
      {
        title: action.title,
        genre: action.genre,
        id: nextMovieId++
      }
    ];
    case 'REMOVE_MOVIES':
    return state.filter((movie) => movie.id !==action.id);
    default:
    return state;
  }
};
var addMovie = (title, genre) => {
  return {
    title,
    genre,
    type: 'ADD_MOVIES'
  };
};

var removeMovie = (id) => {
  return {
    id,
    type: 'REMOVE_MOVIES'
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});
var store = redux = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New Hobbies', state.hobbies);
  console.log('New Movies', state.movies);
})

var currentState = store.getState();
console.log('current State', currentState);

store.dispatch(changeName('Nassir'));

// unsubscribe();
store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));
store.dispatch(addMovie('Snitch', 'Action'));

store.dispatch(addMovie('Frozen', 'Animation'));

store.dispatch(removeMovie(2));

store.dispatch(changeName('DJAMILLA'));
