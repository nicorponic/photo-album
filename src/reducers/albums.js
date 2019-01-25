export default (state = [], action) => {
  // console.log(state, 'state', action.payload, 'action')
  switch (action.type) {
      case 'ADD_ALBUM':
          return [...state,action.payload]
  
      default:
          return state
  }
}