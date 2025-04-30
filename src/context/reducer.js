export const initialState = {
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };

  export function reducer(state, action) {
    switch (action.type) {
      case 'SET_DATE':
        return { ...state, date: action.payload };
      case 'SET_TIME':
        return { ...state, time: action.payload };
      case 'SET_GUESTS':
        return { ...state, guests: action.payload };
      case 'SET_OCCASION':
        return { ...state, occasion: action.payload };
      default:
        return state;
    }
  }
