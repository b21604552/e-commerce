import React from 'react'
import ReactDOM from 'react-dom'
import SearchBox from './SearchBox'
import renderer from 'react-test-renderer'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

describe('SearchBox Test', () => {
  let page = (
    <Provider store={reduxStore}>
      <SearchBox/>
    </Provider>
  )

  it('Renders SearchBox without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders SearchBox correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })

  it('SearchBox Change Test 1', () => {
    const event = {
      preventDefault () {},
      target: { value: 'App' }
    }
    shallow(page).find(SearchBox).dive().find('#search-input').simulate('change', event)
    const { searchKeyword } = reduxStore.getState().GeneralReducer
    expect(searchKeyword).toStrictEqual('App')
  })

  it('SearchBox Change Test 2', () => {
    const event = {
      preventDefault () {},
      target: { value: 'A' }
    }
    shallow(page).find(SearchBox).dive().find('#search-input').simulate('change', event)
    const { searchKeyword } = reduxStore.getState().GeneralReducer
    expect(searchKeyword).toStrictEqual(null)
  })
})