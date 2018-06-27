export default ( state , action ) => {

  switch ( action.type ) {

    case 'INCREMENT_FRAME': {
      // if incremented frame index > numberOfFrames, loop back to 0
      state.canvas.frameIndex = ( state.canvas.frameIndex === state.canvas.numberOfFrames ) ? 0 : state.canvas.frameIndex+1;
      return state;
    }

    case 'DECREMENT_FRAME': {
      state.canvas.frameIndex = ( state.canvas.frameIndex === 0 ) ? state.canvas.numberOfFrames : state.canvas.frameIndex-1;
      return state;
    }

    case 'SET_FOOD': {
      state.food = action.food;
      return state;
    }

    case 'SET_BACKGROUND': {
      state.background = action.background;
      return state;
    }

    case 'PLAY':
      return state;

    case 'PAUSE':
      return state;

    case 'STOP':
      return state;

    default:
      return state;
  }

}
