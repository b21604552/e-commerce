import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import renderer from 'react-test-renderer'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { setModalVisible } from '../../services/redux/actions/GeneralAction'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import { Provider } from 'react-redux'

configure({ adapter: new Adapter() })

describe('Modal Component Test', () => {
  const page = (
    <Provider store={reduxStore}>
      <Modal/>
    </Provider>
  )

  it('Renders Modal without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders Modal correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })

  it('Modal Change Test 1', () => {
    setModalVisible(true)
    const modal = shallow(page)
    modal.dive().find(Modal).dive().find('#modal-confirm').simulate('click')
    const { modalVisible } = reduxStore.getState().GeneralReducer
    expect(modalVisible).toStrictEqual(false)
  })

  it('Modal Change Test 2', () => {
    setModalVisible(true)
    const modal = shallow(page)
    modal.dive().find(Modal).dive().find('#modal-reject').simulate('click')
    const { modalVisible } = reduxStore.getState().GeneralReducer
    expect(modalVisible).toStrictEqual(false)
  })
})