import {
LOGGING_IN_START,   
FETCH_FRIEND_START,
FETCH_FRIEND_SUCCESS,
FETCH_FRIEND_FAILURE} from '../actions';



const initialState = {
    friends: [],
    fetchingFriends: false,
    loggingIn: false,
     error: null
    // savingFriends: false,
    // updatingFriend: false,
    // deletingFriends: false,
}



const reducer = (state = initialState, action) => {
console.log('reducer', action);
switch(action.type) {
    case LOGGING_IN_START: {
        return {
            ...state,
            loggingIn: true
        };
    }
    case FETCH_FRIEND_START: 
        return {
            ...state,
            fetchingFriends: true
        };
    case FETCH_FRIEND_SUCCESS:  
        return {
            ...state,
            fetchingFriends: true,
            friends: [...state.friends, ...action.payload]
        };
    case FETCH_FRIEND_FAILURE:
        return {
            ...state,
            error: action.payload
        };
    default:
        return state;
    
    }
        
    }


export default reducer;


