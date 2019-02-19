import {
  MEETINGS_GET_MEETINGS_BEGIN,
  MEETINGS_GET_MEETINGS_SUCCESS,
  MEETINGS_GET_MEETINGS_FAILURE,
  MEETINGS_GET_MEETINGS_DISMISS_ERROR,
} from './constants';

export function getMeetings() {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: MEETINGS_GET_MEETINGS_BEGIN,
    });


    return fetch("https://meetingsrestful.herokuapp.com/meetings")
      .then(response => response.json())
      .then(function(createdJson){
        dispatch({
          type: MEETINGS_GET_MEETINGS_SUCCESS,
          data: createdJson.meetings,
        });
      })
      .catch(function(error){
        dispatch({
          type: MEETINGS_GET_MEETINGS_FAILURE,
          data: error
        });
        console.log("Error: ", error)
      });
    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissGetMeetingsError() {
  return {
    type: MEETINGS_GET_MEETINGS_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case MEETINGS_GET_MEETINGS_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getMeetingsPending: true,
        getMeetingsError: null,
      };

    case MEETINGS_GET_MEETINGS_SUCCESS:
      // The request is success
      return {
        ...state,
        getMeetingsPending: false,
        getMeetingsError: null,
        data: action.data
      };

    case MEETINGS_GET_MEETINGS_FAILURE:
      // The request is failed
      return {
        ...state,
        getMeetingsPending: false,
        getMeetingsError: action.data.error,
      };

    case MEETINGS_GET_MEETINGS_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        getMeetingsError: null,
      };

    default:
      return state;
  }
}
