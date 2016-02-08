import {expect} from 'chai'
import reducer from '../src/reducers/reducer.js'
const initialState = {
  products: [],
  cart: {user: {name: "A", email: "meh@meh.com", cCard:"232t4-2353525335"}, item: {name: 'A', id: 0, price: 330}}
}

describe ('Testing Reducer function', () => {

  it ('handles add products', () => {
    const action = {type: 'ADD_PRODUCT',
                    data: [
                      {name:'A', id:1, price:1}, 
                      {name:'B', id:2, price:2}
                    ]}
   const nextState = reducer(initialState, action)
   expect(nextState.products.length).to.equal(2)
  })

  it ('doesn\`t add products if incorrect', () => {
    const action = {type: 'ADD_PRODUCT',
                    data: [
                      {id:1, price:1}, 
                      {name:'B', id:2, price:2}
                    ]}
   const nextState = reducer(initialState, action)
   expect(nextState.products.length).to.equal(1)
  })

  it('handles select products', () =>  {
   const action = {type: 'SELECT_PRODUCT',
                   data: {name: 'handlebars', id: 1, price: 2}}
   const nextState = reducer(initialState, action)
   expect(nextState.cart.item.name).to.equal('handlebars')
  })

  it('handles adds a user', () =>  {
   const action = {type: 'ADD_USER',
                   data: {name: 'handlebars', email: 'a@a.com', cCard: '1245-3454-4444-6666'}}
   const nextState = reducer(initialState, action)
   expect(nextState.cart.user.name).to.equal('handlebars')
   expect(nextState.cart.user.email).to.equal('a@a.com')
   expect(nextState.cart.user.cCard).to.equal('1245-3454-4444-6666')
  })


  it('handles buy products', () =>  {
   const action = {type: 'BUY_PRODUCT',
                   data: {name:'A', id:1, price:1}}
   const nextState = reducer(initialState, action)
   expect(nextState.cart.item.name).to.equal(undefined)
  })

})


