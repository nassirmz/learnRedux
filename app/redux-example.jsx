var redux = require('redux');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    };
    case 'ADD_HOBBY':
    return {
      ...state,
      hobbies: [
        ...state.hobbies,
        {
          hobby: action.hobby,
          id: nextHobbyId++
        }
      ]
    };
    case 'ADD_MOVIES':
    return {
      ...state,
      movies: [
        ...state.movies,
        {
          title: action.title,
          genre: action.genre,
          id: nextMovieId++
        }
      ]
    };
    case 'REMOVE_HOBBY':
    return {
      ...state,
      hobbies: state.hobbies.filter((hobby) =>  hobby.id !== action.id)
    };
    case 'REMOVE_MOVIES':
    return {
      ...state,
      movies: state.movies.filter((movie) => movie.id !==action.id)
    };
    default:
    return state;
  }
}

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
