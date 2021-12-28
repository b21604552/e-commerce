import Apple from '../images/Apple.png'
import Samsung from '../images/Samsung.png'
import Huawei from '../images/Huawei.png'
import LG from '../images/LG.png'
import Xiaomi from '../images/Xiaomi.png'
import Default from '../images/Default.png'

const images = { Apple, Samsung, Huawei, LG, Xiaomi }

const GeneralHelper = {

  getImageByKey (key) {
    if(images[key] !== undefined)
      return images[key]
    else
      return Default
  },

  getPageTitle (brand, color) {
    let pageTitle
    if (brand !== null && color === null) {
      pageTitle = brand + ' İçin Filtrelenmiş Sonuçlar'
    } else if (brand === null && color !== null) {
      pageTitle = color + ' İçin Filtrelenmiş Sonuçlar'
    } else if (brand !== null && color !== null) {
      pageTitle = brand + ' & ' + color + ' İçin Filtrelenmiş Sonuçlar'
    } else {
      pageTitle = 'Hoşgeldiniz'
    }
    return pageTitle
  },

  getOrderData (e) {
    let data = {}
    if (e === '0') {
      data.field = 'discountedPrice'
      data.type = 'asc'
    } else if (e === '1') {
      data.field = 'discountedPrice'
      data.type = 'desc'
    } else if (e === '2') {
      data.field = 'title'
      data.type = 'asc'
    } else if (e === '3') {
      data.field = 'title'
      data.type = 'desc'
    } else {
      data.field = null
      data.type = null
    }
    data.id = e
    return data
  },

  hasProduct (array, id) {
    if(array !== null){
      for (let i = 0; i < array.length; i++) {
        if (id === array[i]) {
          return true
        }
      }
      return false
    }else
      return false
  }
}

export default GeneralHelper