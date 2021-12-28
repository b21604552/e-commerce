import { reduxStore } from '../ReduxIndex'

export function setHeaderTitle (headerTitle) {
  reduxStore.dispatch({
    type: 'setHeaderTitle',
    payload: {
      headerTitle
    },
  })
}

export function setSearchedKeyword (searchKeyword) {
  reduxStore.dispatch({
    type: 'setSearchedKeyword',
    payload: {
      searchKeyword
    },
  })
}

export function setOrderValue (orderValue) {
  reduxStore.dispatch({
    type: 'setOrderValue',
    payload: {
      orderValue
    },
  })
}

export function setItemCountInBasket (itemCountInBasket) {
  reduxStore.dispatch({
    type: 'setItemCountInBasket',
    payload: {
      itemCountInBasket
    },
  })
}

export function setModalFinished (modalFinished) {
  reduxStore.dispatch({
    type: 'setModalFinished',
    payload: {
      modalFinished
    },
  })
}

export function setModalVisible (modalVisible) {
  reduxStore.dispatch({
    type: 'setModalVisible',
    payload: {
      modalVisible
    },
  })
}
