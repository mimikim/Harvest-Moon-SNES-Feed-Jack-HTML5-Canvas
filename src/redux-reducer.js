export default ( state , action ) => {

  switch ( action.type ) {

    case 'SET_FOOD': {
      state.food = action.food;
      return state;
    }

    case 'SET_BACKGROUND': {
      state.background = action.background;
      return state;
    }

    default:
      return state;
  }

}
