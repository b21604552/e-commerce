let initialState = {
  headerTitle: 'Hoşgeldiniz',
  searchKeyword: null,
  orderValue: '',
  itemCountInBasket: JSON.parse(localStorage.getItem('basket')) !== null ? JSON.parse(localStorage.getItem('basket')).length : 0,
  modalVisible: false,
  modalFinished: false
}

export default function GeneralReducer (state = initialState, action) {
  if (action.type === 'setHeaderTitle') {
    return Object.assign({}, state, { headerTitle: action.payload.headerTitle })
  } else if (action.type === 'setSearchedKeyword') {
    return Object.assign({}, state, { searchKeyword: action.payload.searchKeyword })
  } else if (action.type === 'setOrderValue') {
    return Object.assign({}, state, { orderValue: action.payload.orderValue })
  } else if (action.type === 'setItemCountInBasket') {
    return Object.assign({}, state, { itemCountInBasket: action.payload.itemCountInBasket })
  } else if (action.type === 'setModalFinished') {
    return Object.assign({}, state, { modalFinished: action.payload.modalFinished })
  } else if (action.type === 'setModalVisible') {
    return Object.assign({}, state, { modalVisible: action.payload.modalVisible })
  } else {
    return state
  }
}
