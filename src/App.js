import './App.css'
import React, { Component } from 'react'
import Container from './main/Container'
import Header from './main/Header'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className={'main-container'}>
        <Header/>
        <Container/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  headerTitle: state.GeneralReducer.headerTitle,
  searchKeyword: state.GeneralReducer.searchKeyword,
  orderValue: state.GeneralReducer.orderValue,
  itemCountInBasket: state.GeneralReducer.itemCountInBasket,
  modalFinished: state.GeneralReducer.modalFinished,
  modalVisible: state.GeneralReducer.modalVisible
})

export default connect(mapStateToProps)(App)
