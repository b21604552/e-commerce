import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product'
import renderer from 'react-test-renderer'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { Provider } from 'react-redux'

const data = [
  {
    'id': 0,
    'title': 'Apple iPhone 11 32GB',
    'brand': 'Apple',
    'color': 'Siyah',
    'price': 124,
    'discountedPrice': 109.12,
    'discount': 12,
    'image': 'Apple'
  },
  {
    'id': 1,
    'title': 'Apple iPhone 11 32GB',
    'brand': 'Apple',
    'color': 'Lacivert',
    'price': 124,
    'discountedPrice': 109.12,
    'discount': 12,
    'image': 'Apple'
  },
  {
    'id': 2,
    'title': 'Apple iPhone 11 32GB',
    'brand': 'Apple',
    'color': 'Sarı',
    'price': 124,
    'discountedPrice': 109.12,
    'discount': 12,
    'image': 'Apple'
  },
  {
    'id': 3,
    'title': 'Apple iPhone 11 32GB',
    'brand': 'Apple',
    'color': 'Beyaz',
    'price': 124,
    'discountedPrice': 109.12,
    'discount': 12,
    'image': 'Apple'
  },
  {
    'id': 4,
    'title': 'Apple iPhone 11 64GB',
    'brand': 'Apple',
    'color': 'Siyah',
    'price': 224,
    'discountedPrice': 194.88,
    'discount': 13,
    'image': 'Apple'
  },
  {
    'id': 5,
    'title': 'Apple iPhone 11 64GB',
    'brand': 'Apple',
    'color': 'Lacivert',
    'price': 224,
    'discountedPrice': 194.88,
    'discount': 13,
    'image': 'Apple'
  },
  {
    'id': 6,
    'title': 'Apple iPhone 11 64GB',
    'brand': 'Apple',
    'color': 'Sarı',
    'price': 224,
    'discountedPrice': 194.88,
    'discount': 13,
    'image': 'Apple'
  },
  {
    'id': 7,
    'title': 'Apple iPhone 11 64GB',
    'brand': 'Apple',
    'color': 'Beyaz',
    'price': 224,
    'discountedPrice': 194.88,
    'discount': 13,
    'image': 'Apple'
  },
  {
    'id': 8,
    'title': 'Apple iPhone 11 128GB',
    'brand': 'Apple',
    'color': 'Siyah',
    'price': 324,
    'discountedPrice': 278.64,
    'discount': 14,
    'image': 'Apple'
  },
  {
    'id': 9,
    'title': 'Apple iPhone 11 128GB',
    'brand': 'Apple',
    'color': 'Lacivert',
    'price': 324,
    'discountedPrice': 278.64,
    'discount': 14,
    'image': 'Apple'
  },
  {
    'id': 10,
    'title': 'Apple iPhone 11 128GB',
    'brand': 'Apple',
    'color': 'Sarı',
    'price': 324,
    'discountedPrice': 278.64,
    'discount': 14,
    'image': 'Apple'
  },
  {
    'id': 11,
    'title': 'Apple iPhone 11 128GB',
    'brand': 'Apple',
    'color': 'Beyaz',
    'price': 324,
    'discountedPrice': 278.64,
    'discount': 14,
    'image': 'Apple'
  }
]

describe('Product Test', () => {
  let page = (
    <Provider store={reduxStore}>
      <Product data={data}/>
    </Provider>
  )

  it('Renders Product without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders Product correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })
})