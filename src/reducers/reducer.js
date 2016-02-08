const initialState = {
  products: [],
  cart: {user: null, item: null}
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': 
      return state
    case 'ADD_PRODUCT':
      return state
    case 'SELECT_PRODUCT':
      return state
    case 'BUY_PRODUCT': 
      return state
  }
  return state
}

export default reducer