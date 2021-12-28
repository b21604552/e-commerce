import React from 'react'
import ReactDOM from 'react-dom'
import SideFilter from './SideFilter'
import renderer from 'react-test-renderer'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { Provider } from 'react-redux'

const filterOptions = {
  'color': [
    {
      'text': 'Siyah',
      'value': 10
    },
    {
      'text': 'Lacivert',
      'value': 10
    },
    {
      'text': 'Sarı',
      'value': 10
    },
    {
      'text': 'Beyaz',
      'value': 10
    }
  ],
  'brand': [
    {
      'text': 'Apple',
      'value': 16
    },
    {
      'text': 'Samsung',
      'value': 12
    },
    {
      'text': 'Xiaomi',
      'value': 4
    },
    {
      'text': 'Huawei',
      'value': 4
    },
    {
      'text': 'LG',
      'value': 4
    }
  ]
}

describe('SideFilter Test', () => {
  let page = (
    <Provider store={reduxStore}>
      <SideFilter filterOptions={filterOptions}/>
    </Provider>
  )

  it('Renders SideFilter without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders SideFilter correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })
})