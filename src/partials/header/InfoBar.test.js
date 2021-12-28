import React from 'react'
import ReactDOM from 'react-dom'
import InfoBar from './InfoBar'
import renderer from 'react-test-renderer'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { Provider } from 'react-redux'

describe('InfoBar Test', () => {
  let page = (
    <Provider store={reduxStore}>
      <InfoBar/>
    </Provider>
  )

  it('Renders InfoBar without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders InfoBar correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })
})