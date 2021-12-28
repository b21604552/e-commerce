import {setHeaderTitle, setItemCountInBasket, setOrderValue, setSearchedKeyword, setModalVisible, setModalFinished} from './GeneralAction'
import { reduxStore } from '../ReduxIndex'

describe('General Action Test', () => {

  test('setHeaderTitle Test', () => {
    setHeaderTitle("Test");
    const { headerTitle } = reduxStore.getState().GeneralReducer
    expect(headerTitle).toStrictEqual("Test");
  })

  test('setItemCountInBasket Test', () => {
    setItemCountInBasket(5);
    const { itemCountInBasket } = reduxStore.getState().GeneralReducer
    expect(itemCountInBasket).toStrictEqual(5);
  })

  test('setOrderValue Test', () => {
    setOrderValue("0");
    const { orderValue } = reduxStore.getState().GeneralReducer
    expect(orderValue).toStrictEqual("0");
  })

  test('setSearchedKeyword Test', () => {
    setSearchedKeyword("Appl");
    const { searchKeyword } = reduxStore.getState().GeneralReducer
    expect(searchKeyword).toStrictEqual("Appl");
  })

  test('setModalVisible Test', () => {
    setModalVisible(true);
    const { modalVisible } = reduxStore.getState().GeneralReducer
    expect(modalVisible).toStrictEqual(true);
  })

  test('setModalFinished Test', () => {
    setModalFinished(true);
    const { modalFinished } = reduxStore.getState().GeneralReducer
    expect(modalFinished).toStrictEqual(true);
  })
})