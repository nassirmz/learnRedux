var redux = require('redux');

var reducer = (state = { name: 'Anonymous' }, action) => {
  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    };
    default:
    return state;
  }
}

var store = redux = redux.createStore(reducer);

var currentState = store.getState();
console.log('current State', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Nassir'
};

store.dispatch(action);

console.log('Name should be andrew', store.getState());

//only requirement of our actions are their type property
