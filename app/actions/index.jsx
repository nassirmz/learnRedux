var axios = require('axios');

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

export var addHobby = (hobby) => {
  return {
    hobby,
    type: 'ADD_HOBBY'
  };
};
export var removeHobby = (id) => {
  return {
    id,
    type: 'REMOVE_HOBBY'
  };
};

//Movies reducer and action generators

export var addMovie = (title, genre) => {
  return {
    title,
    genre,
    type: 'ADD_MOVIES'
  };
};

export var removeMovie = (id) => {
  return {
    id,
    type: 'REMOVE_MOVIES'
  };
};
//Map reducer and action generators



export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io')
      .then(function (res) {
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.com?q='
        dispatch(completeLocationFetch(baseUrl + loc));
      });
  }
};
