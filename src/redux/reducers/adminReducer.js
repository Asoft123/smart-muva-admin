const initialState = {
    isAuthenticated: false,
    isLogining: false,
    adminData: {},
  };
  
  export default function adminReducer(state = initialState, action) {
    switch (action.type) {
      case "LOGIN_ADMIN":
        return {
          ...state,
          isAuthenticated: true,
          data: action.payload,
        };
      case "LOGOUT_ADMIN":
        return {
          ...state,
          isAuthenticated: false,
        };
      case "AUTHENTICATE_ADMIN":
        return {
          ...state,
          isAuthenticated: true,
        };
      case "SET_ADMIN":
        return {
          isAuthenticated: true,
          data: action.payload,
        };
      case "LOGINING_ADMIN": {
        return {
          ...state,
          isLogining: true,
        };
      }
      case "COMPLETE_LOGINING_ADMIN": {
        return {
          ...state,
          isLogining: false,
        };
      }
  
      default:
        return state;
    }
  }