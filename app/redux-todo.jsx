var redux = require('redux');
  var reducer = (state = { searchText: '', todos: [], showCompleted: false }, action) => {
    return state;
  }

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('curent state', currentState);
