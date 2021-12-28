import React from 'react'
import ReactDOM from 'react-dom'
import Basket from './Basket'
import renderer from 'react-test-renderer'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { Provider } from 'react-redux'

describe('Basket Test', () => {
  let page = (
    <Provider store={reduxStore}>
      <Basket/>
    </Provider>
  )

  it('Renders Basket without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders Basket correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })
})