var redux = require('redux');

//Name reducer and action generators

//Hobbies reducer and action generators
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();





//subscribe to changes
console.log(store);
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  // document.getElementById('app').innerHTML = state.name;

  console.log('New Hobbies', state.hobbies);
  console.log('New Movies', state.movies);
  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">map</a>'
  }
});

var currentState = store.getState();
console.log('current State', currentState);

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Nassir'));

// unsubscribe();
store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('Snitch', 'Action'));

store.dispatch(actions.addMovie('Frozen', 'Animation'));

store.dispatch(actions.removeMovie(2));

store.dispatch(actions.changeName('DJAMILLA'));
