import data from '../data/data.json'
import _ from 'lodash'
import { setItemCountInBasket, setModalFinished } from './redux/actions/GeneralAction'

const Api = {
  getByPage (page, pageSize, filter) {
    let resultData = this.applyFilter(filter)

    let result = this.setResult(resultData, page, pageSize)

    result.pagination = this.setPagination(page, pageSize, resultData.length)
    result.pagination.pages = this.setPaginationElements(page, Math.ceil(resultData.length / pageSize))
    result.filterOptions.color = this.filterOptions(resultData, 'color')
    result.filterOptions.brand = this.filterOptions(resultData, 'brand')

    return result
  },

  setResult (resultData, page, pageSize) {
    return {
      data: _.slice(resultData, (page * pageSize - pageSize), (page * pageSize)),
      filterOptions: {}
    }
  },

  applyFilter (filter) {
    let resultData = data

    if (filter.title !== null) {
      resultData = _.filter(resultData, function (x) {
        return x.title.includes(filter.title)
      })
    }

    if (filter.brand !== null) {
      resultData = _.filter(resultData, { 'brand': filter.brand })
    }

    if (filter.color !== null) {
      resultData = _.filter(resultData, { 'color': filter.color })
    }

    if (filter.order !== null && filter.orderField !== null) {
      resultData = _.orderBy(resultData, [filter.orderField], [filter.order])
    }

    return resultData
  },

  setPagination (page, pageSize, resultCount) {
    return {
      isPrevEnable: page > 1,
      isNextEnable: page * pageSize + 1 < resultCount,
      currentPage: page,
      pages: [],
    }
  },

  setPaginationElements (page, max) {
    let result = []
    for (let i = 1; i <= max; i++) {
      let pageElement = {
        key: i,
        active: i === page
      }
      result.push(pageElement)
    }
    return result
  },

  filterOptions (resultData, field) {
    let result = []
    let options = Array.from(new Set(_.map(data, field)))
    for (let i = 0; i < options.length; i++) {
      let option = {
        text: options[i]
      }
      if (field === 'brand')
        option.value = _.filter(resultData, { 'brand': options[i] }).length
      else if (field === 'color')
        option.value = _.filter(resultData, { 'color': options[i] }).length
      result.push(option)
    }
    return result
  },

  addProductToBasket (id) {
    let basket = JSON.parse(localStorage.getItem('basket'))
    if (basket !== null) {
      let isAlreadyAdded = false
      for (let i = 0; i < basket.length; i++) {
        if (basket[i] === id) {
          isAlreadyAdded = true
          break
        }
      }
      if (!isAlreadyAdded)
        basket.push(id)
    } else {
      basket = [id]
    }
    localStorage.setItem('basket', JSON.stringify(basket))
    setItemCountInBasket(basket.length)
  },

  getBasket () {
    return JSON.parse(localStorage.getItem('basket'))
  },

  getProductsInBasket () {
    let basket = JSON.parse(localStorage.getItem('basket'))
    if (basket !== null) {
      let result = []
      for (let i = 0; i < basket.length; i++) {
        result.push(_.find(data, { id: basket[i] }))
      }
      return result
    } else
      return []
  },

  removeProductToBasket (id) {
    let basket = JSON.parse(localStorage.getItem('basket'))
    if (basket !== null) {
      basket.splice(basket.indexOf(id), 1)
    }
    localStorage.setItem('basket', JSON.stringify(basket))
    setItemCountInBasket(basket.length)
    setModalFinished(false)
  },
}

export default Api
