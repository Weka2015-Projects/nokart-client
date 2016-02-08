import React, {Component} from 'react'
import Item from './item.jsx'

class Products extends Component {
  constructor (props) {
    super (props)
  }
  render () {
  return (
    <ul>
      <Item />
    </ul>
    )
  }
}