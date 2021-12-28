import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import renderer from 'react-test-renderer'
import { reduxStore } from '../services/redux/ReduxIndex'
import { Provider } from 'react-redux'

describe('Header Test', () => {
  let page = (
    <Provider store={reduxStore}>
      <Header/>
    </Provider>
  )

  it('Renders Header without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders Header correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })
})