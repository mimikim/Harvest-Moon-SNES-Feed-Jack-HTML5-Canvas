// all dispatch actions

export function incrementFrame() {
  return { type: 'INCREMENT_FRAME' }
}

export function decrementFrame() {
  return { type: 'DECREMENT_FRAME' }
}

export function setFood( food ) {
  return { type: 'SET_FOOD', food }
}

export function setBackground( background ) {
  return { type: 'SET_BACKGROUND', background }
}
