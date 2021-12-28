import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'
import renderer from 'react-test-renderer'
import { reduxStore } from '../services/redux/ReduxIndex'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

describe('Container Test', () => {

  let page = (
    <Provider store={reduxStore}>
      <Container/>
    </Provider>
  )

  it('Renders Container without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(page, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders Container correctly', () => {
    const div = renderer.create(page).toJSON()
    expect(div).toMatchSnapshot()
  })

  it('Container.setFilterColor Test', () => {
    const container = shallow(page).dive().dive().instance()
    container.setFilterColor('Siyah')
    const data = container.state.data
    const expectedValue = [
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
        'id': 12,
        'title': 'Apple iPhone 11 256GB',
        'brand': 'Apple',
        'color': 'Siyah',
        'price': 424,
        'discountedPrice': 360.4,
        'discount': 15,
        'image': 'Apple'
      },
      {
        'id': 16,
        'title': 'Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Siyah',
        'price': 124,
        'discountedPrice': 109.12,
        'discount': 12,
        'image': 'Samsung'
      },
      {
        'id': 20,
        'title': 'Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Siyah',
        'price': 224,
        'discountedPrice': 194.88,
        'discount': 13,
        'image': 'Samsung'
      },
      {
        'id': 24,
        'title': 'Samsung Galaxy S21 Ultra 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Siyah',
        'price': 324,
        'discountedPrice': 278.64,
        'discount': 14,
        'image': 'Samsung'
      },
      {
        'id': 28,
        'title': 'Xiaomi Mi 11 256 GB (Xiaomi Türkiye Garantili) Xiaomi Mi 11 256 GB (Xiaomi Türkiye Garantili)',
        'brand': 'Xiaomi',
        'color': 'Siyah',
        'price': 424,
        'discountedPrice': 360.4,
        'discount': 15,
        'image': 'Xiaomi'
      },
      {
        'id': 32,
        'title': 'Huawei Mate Xs 512 GB (Huawei Türkiye Garantili) Huawei Mate Xs 512 GB (Huawei Türkiye Garantili)',
        'brand': 'Huawei',
        'color': 'Siyah',
        'price': 424,
        'discountedPrice': 360.4,
        'discount': 15,
        'image': 'Huawei'
      },
      {
        'id': 36,
        'title': 'LG K61 128 GB (LG Türkiye Garantili)',
        'brand': 'LG',
        'color': 'Siyah',
        'discountedPrice': 360.4,
        'price': 424,
        'discount': 15,
        'image': 'LG'
      }
    ]
    expect(expectedValue).toStrictEqual(data)
  })

  it('Container.setFilterBrand Test', () => {
    const container = shallow(page).dive().dive().instance()
    container.setFilterBrand('Apple')
    const data = container.state.data
    const expectedValue = [
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
    expect(expectedValue).toStrictEqual(data)
  })

  it('Container.setSearch Test', () => {
    const container = shallow(page).dive().dive().instance()
    container.setSearch('App')
    const data = container.state.data
    const expectedValue = [
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
    expect(expectedValue).toStrictEqual(data)
  })

  it('Container.setPage Test', () => {
    const container = shallow(page).dive().dive().instance()
    container.setPage(2)
    const data = container.state.data
    const expectedValue = [
      {
        'id': 12,
        'title': 'Apple iPhone 11 256GB',
        'brand': 'Apple',
        'color': 'Siyah',
        'price': 424,
        'discountedPrice': 360.4,
        'discount': 15,
        'image': 'Apple'
      },
      {
        'id': 13,
        'title': 'Apple iPhone 11 256GB',
        'brand': 'Apple',
        'color': 'Lacivert',
        'price': 424,
        'discountedPrice': 360.4,
        'discount': 15,
        'image': 'Apple'
      },
      {
        'id': 14,
        'title': 'Apple iPhone 11 256GB',
        'brand': 'Apple',
        'color': 'Sarı',
        'price': 424,
        'discountedPrice': 360.4,
        'discount': 15,
        'image': 'Apple'
      },
      {
        'id': 15,
        'title': 'Apple iPhone 11 256GB',
        'brand': 'Apple',
        'color': 'Beyaz',
        'price': 424,
        'discountedPrice': 360.4,
        'discount': 15,
        'image': 'Apple'
      },
      {
        'id': 16,
        'title': 'Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Siyah',
        'price': 124,
        'discountedPrice': 109.12,
        'discount': 12,
        'image': 'Samsung'
      },
      {
        'id': 17,
        'title': 'Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Lacivert',
        'price': 124,
        'discountedPrice': 109.12,
        'discount': 12,
        'image': 'Samsung'
      },
      {
        'id': 18,
        'title': 'Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Sarı',
        'price': 124,
        'discountedPrice': 109.12,
        'discount': 12,
        'image': 'Samsung'
      },
      {
        'id': 19,
        'title': 'Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Beyaz',
        'price': 124,
        'discountedPrice': 109.12,
        'discount': 12,
        'image': 'Samsung'
      },
      {
        'id': 20,
        'title': 'Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Siyah',
        'price': 224,
        'discountedPrice': 194.88,
        'discount': 13,
        'image': 'Samsung'
      },
      {
        'id': 21,
        'title': 'Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Lacivert',
        'price': 224,
        'discountedPrice': 194.88,
        'discount': 13,
        'image': 'Samsung'
      },
      {
        'id': 22,
        'title': 'Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Sarı',
        'price': 224,
        'discountedPrice': 194.88,
        'discount': 13,
        'image': 'Samsung'
      },
      {
        'id': 23,
        'title': 'Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)',
        'brand': 'Samsung',
        'color': 'Beyaz',
        'price': 224,
        'discountedPrice': 194.88,
        'discount': 13,
        'image': 'Samsung'
      }
    ]
    expect(expectedValue).toStrictEqual(data)
  })

})