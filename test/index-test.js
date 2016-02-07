import React from 'react'
import { renderIntoDocument, scryRenderedDOMComponentsWithClass, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils'
import { List, Map } from 'immutable'
import ReactDOM from 'react-dom'
import App from '../src/components/app.jsx'
import Heading from '../src/components/heading.jsx'

import { expect } from 'chai'

describe('Basic Hello World Rendering', () => {
  it ('Renders Heading component into App body', () => {
    const component = renderIntoDocument(
      <Heading />
    )
    const helloworld = scryRenderedDOMComponentsWithTag(component, 'h1')[0].textContent
    expect(helloworld).to.contain('Hello World')
  })
  it ('Renders App component into app body', () => {
    const component = renderIntoDocument(
      <App />
    )
    const helloworld = scryRenderedDOMComponentsWithTag(component, 'h1')[0].textContent
    console.log(helloworld)
    expect(helloworld).to.contain('Hello World')
  })
})