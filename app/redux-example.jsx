var redux = require('redux');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
    return action.name;
    default:
    return state;
  }
};

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

  console.log('New state', state.hobbies);
  console.log('New Movie', state.movies);
})

var currentState = store.getState();
console.log('current State', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Nassir'
});

// unsubscribe();
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})
store.dispatch({
  type: 'ADD_MOVIES',
  title: 'SNITCH',
  genre: 'ACTION'
});

store.dispatch({
  type: 'ADD_MOVIES',
  title: 'SNOW',
  genre: 'COMEDY'
});

store.dispatch({
  type: 'REMOVE_MOVIES',
  id: 2
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'DJAMILLA'
})
