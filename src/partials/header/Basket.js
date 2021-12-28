import React, { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import Api from '../../services/Api'
import GeneralHelper from '../../helper/GeneralHelper'
import { useSelector } from 'react-redux'
import { setModalVisible } from '../../services/redux/actions/GeneralAction'

export default function Basket () {
  const { itemCountInBasket } = useSelector((state) => state?.GeneralReducer)
  const { modalFinished } = useSelector((state) => state?.GeneralReducer)

  const [basket, setBasket] = useState(Api.getProductsInBasket())
  const [removingProduct, setRemovingProduct] = useState(null)

  useEffect(() => {
    if (modalFinished) {
      Api.removeProductToBasket(removingProduct)
    }
  }, [modalFinished, removingProduct])

  useEffect(() => {
    setBasket(Api.getProductsInBasket())
  }, [itemCountInBasket])

  function removeProductModal (id) {
    setRemovingProduct(id)
    setModalVisible(true)
  }

  return (
    <>
      <Modal/>
      <div className={'basket-wrapper'}>
        {
          itemCountInBasket > 0 && (
            <i className="basket-count">{itemCountInBasket}</i>
          )
        }
        <div className="basket-button">
          <div>Sepetim</div>
        </div>
        <div className={'basket-opened'}>
          {basket.length !== 0 ? (
            basket.map((product) => (
              <div key={'product-' + product.id} className={'basket-opened-element'}>
                <div className={'basket-product-image-wrapper'}>
                  <img alt={'product-' + product.id} src={GeneralHelper.getImageByKey(product.image)} width={40} height={59}/>
                </div>
                <div className={'basket-product-info-wrapper'}>
                  <div className={'basket-product-title'}>
                    {product.title + ' Renk: ' + product.color}
                  </div>
                  <div className={'basket-product-remove-wrapper'}>
                    <button id={'remove-' + product.id} className={'basket-remove-button'} onClick={() => removeProductModal(product.id)}>Kaldır</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={'basket-empty-wrapper'}>
              <div className={'basket-empty'}>
                Sepetinizde ürün bulunmamaktadır.
              </div>
            </div>
          )
          }
        </div>
      </div>
    </>
  )
}