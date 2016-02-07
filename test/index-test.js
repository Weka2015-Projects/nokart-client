import React from 'react/addons'
import { List, Map } from 'immutable'
import ReactDOM from 'react-dom'
import App from '../src/components/app.jsx'
import Heading from '../src/components/heading.jsx'

import { expect } from 'chai'
const { renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate } = React.addons.TestUtils

describe('Basic Hello World Rendering', () => {
  it ('Renders App component into app body') => {
    const component = renderIntoDocument(
      <App />
    )
    console.log('Hello')
  }
}