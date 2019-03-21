import axios from 'axios';

//actions
export const LOGGING_IN_START = 'LOGGING_IN_START';
export const FETCH_FRIEND_START = 'FETCH_FRIEND_START';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';


export const login = (friend) => dispatch => {
    dispatch({ type: LOGGING_IN_START });
    return axios.post('http://localhost:5000/api/friends', friend)
    .then(response => {
      localStorage.setItem('token', response.data.payload);
    })
}


export const getFriend = () => dispatch => {
    dispatch({ type: FETCH_FRIEND_START});
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => 
            dispatch({ type: FETCH_FRIEND_SUCCESS, payload: response.data.friends})
            )
        .catch(error => 
            dispatch({ type: FETCH_FRIEND_FAILURE, payload: error.response})
            )
            
}