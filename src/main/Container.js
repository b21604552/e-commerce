import React from 'react'
import SideFilter from '../partials/contanier/SideFilter'
import Product from '../partials/contanier/Product'
import Pagination from '../partials/contanier/Pagination'
import { setHeaderTitle } from '../services/redux/actions/GeneralAction'
import Api from '../services/Api'
import GeneralHelper from '../helper/GeneralHelper'
import { reduxStore } from '../services/redux/ReduxIndex'

class Container extends React.Component {

  constructor (props) {
    super(props)
    let init = Api.getByPage(1, 12, {
      title: null,
      color: null,
      brand: null,
      order: null,
      orderField: null,
    })

    this.state = {
      data: init.data,
      pagination: init.pagination,
      filterOptions: init.filterOptions,
      page: 1,
      pageSize: 12,
      filter: {
        title: null,
        color: null,
        brand: null,
        order: null,
        orderField: null,
      }
    }

    this.setPage = this.setPage.bind(this)
    this.setFilterColor = this.setFilterColor.bind(this)
    this.setFilterBrand = this.setFilterBrand.bind(this)
    this.setOrder = this.setOrder.bind(this)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { searchKeyword } = reduxStore.getState().GeneralReducer
    const { orderValue } = reduxStore.getState().GeneralReducer
    if (searchKeyword !== this.state.filter.title) {
      this.setSearch(searchKeyword)
    }
    let filter = GeneralHelper.getOrderData(orderValue)
    if (filter.field !== this.state.filter.orderField || filter.type !== this.state.filter.order) {
      this.setOrder(filter.field, filter.type)
    }
  }

  setPage (page) {
    this.getData(page, null)
  }

  setFilterColor (color) {
    let filter = this.state.filter
    filter.color = color
    this.getData(null, filter)
  }

  setFilterBrand (brand) {
    let filter = this.state.filter
    filter.brand = brand
    this.getData(null, filter)
  }

  setOrder (field, type) {
    let filter = this.state.filter
    filter.order = type
    filter.orderField = field
    this.getData(null, filter)
  }

  setSearch (title) {
    let filter = this.state.filter
    filter.title = title
    this.getData(null, filter)
  }

  getData (page, filter) {
    this.setState({
      page: page ?? 1,
      filter: filter ?? this.state.filter
    }, () => {
      let result = Api.getByPage(this.state.page, this.state.pageSize, this.state.filter)
      this.setState({
        data: result.data,
        pagination: result.pagination,
        filterOptions: result.filterOptions
      }, () => {
        if (filter !== null) {
          setHeaderTitle(GeneralHelper.getPageTitle(filter.brand, filter.color))
        }
      })
    })
  }

  render () {

    return (
      <div className="container">

        <SideFilter
          filterOptions={this.state.filterOptions}
          setFilterColor={(color) => this.setFilterColor(color)}
          setFilterBrand={(brand) => this.setFilterBrand(brand)}
          setOrder={(field, type) => this.setOrder(field, type)}
        />

        <div>
          <Product data={this.state.data}/>
          <Pagination pagination={this.state.pagination} setPage={this.setPage}/>
        </div>
      </div>
    )
  }

}

export default Container