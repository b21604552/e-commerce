import React from 'react'
import ReactDOM from 'react-dom'
import Pagination from './Pagination'
import renderer from 'react-test-renderer'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

describe('Pagination Test', () => {

  it('Renders Pagination without crashing', () => {
    const div = document.createElement('div')

    const pagination = {
      isPrevEnable: false,
      isNextEnable: true,
      currentPage: 1,
      pages: [{ active: true, key: 1 }, { active: false, key: 2 }, { active: false, key: 3 }, { active: false, key: 4 }]
    }

    ReactDOM.render(
      <Provider store={reduxStore}>
        <Pagination pagination={pagination}/>
      </Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders Pagination correctly', () => {
    const pagination = {
      isPrevEnable: false,
      isNextEnable: true,
      currentPage: 1,
      pages: [{ active: true, key: 1 }, { active: false, key: 2 }, { active: false, key: 3 }, { active: false, key: 4 }]
    }

    const div = renderer.create(
      <Provider store={reduxStore}>
        <Pagination pagination={pagination}/>
      </Provider>).toJSON()
    expect(div).toMatchSnapshot()
  })

  it('Next button test', () => {
    const pagination = {
      isPrevEnable: false,
      isNextEnable: true,
      currentPage: 1,
      pages: [{ active: true, key: 1 }, { active: false, key: 2 }, { active: false, key: 3 }, { active: false, key: 4 }]
    }

    function setPage (page) {
      expect(page).toEqual(2)
    }

    const comp = shallow(<Pagination pagination={pagination} setPage={(page) => setPage(page)}/>)
    comp.find('#next-page').simulate('click')
  })

  it('Prev button test', () => {
    const pagination = {
      isPrevEnable: true,
      isNextEnable: false,
      currentPage: 2,
      pages: [{ active: false, key: 1 }, { active: true, key: 2 }, { active: false, key: 3 }, { active: false, key: 4 }]
    }

    function setPage (page) {
      expect(page).toEqual(1)
    }

    const comp = shallow(<Pagination pagination={pagination} setPage={(page) => setPage(page)}/>)
    comp.find('#prev-page').simulate('click')
  })

  it('Page button test', () => {
    const pagination = {
      isPrevEnable: true,
      isNextEnable: false,
      currentPage: 2,
      pages: [{ active: false, key: 1 }, { active: true, key: 2 }, { active: false, key: 3 }, { active: false, key: 4 }]
    }

    function setPage (page) {
      expect(page).toEqual(3)
    }

    const comp = shallow(<Pagination pagination={pagination} setPage={(page) => setPage(page)}/>)
    comp.find('#page-3').simulate('click')
  })

})