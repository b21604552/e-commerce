import React, { useEffect, useState } from 'react'
import GeneralHelper from '../../helper/GeneralHelper'
import Api from '../../services/Api'
import { useSelector } from 'react-redux'

export default function Product (props) {
  const { itemCountInBasket } = useSelector((state) => state?.GeneralReducer)
  const [data, setData] = useState(props.data)
  const [basket, setBasket] = useState(Api.getBasket)

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  function addProductToBasket (id) {
    Api.addProductToBasket(id)
    setBasket(Api.getBasket())
  }

  useEffect(() => {
    setBasket(Api.getBasket())
  }, [itemCountInBasket])

  return (
    <div className={'products-wrapper'}>
      {data !== null && (
        data.map((product) => (
          <div key={product.id} className="product-wrapper">
            <div className={'product-image-wrapper'}>
              <img alt={'product-' + product.id} src={GeneralHelper.getImageByKey(product.image)}/>
            </div>
            <div className={'product-info-wrapper'}>
              <div className={'product-title'}>
                {product.title}
              </div>
              <div className={'product-properties-info-wrapper'}>
                <div className={'product-properties-element'}>
                  <div className={'product-properties-label'}>
                    Marka:
                  </div>
                  <div className={'product-properties-value'}>
                    {product.brand}
                  </div>
                </div>
                <div className={'product-properties-element'}>
                  <div className={'product-properties-label'}>
                    Renk:
                  </div>
                  <div className={'product-properties-value'}>
                    {product.color}
                  </div>
                </div>
              </div>
              <div className={'product-price-info-wrapper'}>
                <div className={'product-price-element'}>
                  {product.discountedPrice.toFixed(2)} TL
                </div>
                <div className={'product-old-price-element'}>
                  <div className={'product-old-price'}>
                    {product.price.toFixed(2)} TL
                  </div>
                  <div className={'product-discount'}>
                    {product.discount} %
                  </div>
                </div>
              </div>
            </div>
            <div className={'product-add-cart-wrapper'}>
              {
                GeneralHelper.hasProduct(basket, product.id) ? (
                  <button className={'product-button'} disabled={true}>
                    Bu ürünü sepete ekleyemezsiniz.
                  </button>
                ) : (
                  <button className={'product-button'} onClick={() => addProductToBasket(product.id)}>
                    Sepete Ekle
                  </button>
                )
              }
            </div>
          </div>
        ))
      )}
    </div>
  )
}