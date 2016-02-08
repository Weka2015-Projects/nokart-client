const initialState = {
  products: [],
  cart: {user: {}, item: {}}
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': 
      var newState = state 
      newState.cart.user = action.data
      return newState
    case 'ADD_PRODUCT':
      var newState = state
      var newData = action.data.map((item) => {
        if(item.id && item.price && item.name) {
          newState.products.push(item)
        }
      })
      return newState
    case 'SELECT_PRODUCT':
      var newState = state
      newState.cart.item = action.data
      return newState
    case 'BUY_PRODUCT': 
      var newState = state
      newState.cart.item = {}
      return newState
  }
  return state
}

export default reducer