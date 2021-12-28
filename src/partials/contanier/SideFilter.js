import React, { useEffect, useState } from 'react'
import { setOrderValue } from '../../services/redux/actions/GeneralAction'
import { reduxStore } from '../../services/redux/ReduxIndex'

export default function SideFilter (props) {
  const { orderValue } = reduxStore.getState().GeneralReducer
  const [filterOptions, setFilterOptions] = useState(props.filterOptions)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedBrand, setSelectedBrand] = useState(null)

  useEffect(() => {
    setFilterOptions(props.filterOptions)
  }, [props.filterOptions])

  function toggleSelectedColor (color, i) {
    if (i === selectedColor) {
      props.setFilterColor(null)
      setSelectedColor(null)
    } else {
      props.setFilterColor(color)
      setSelectedColor(i)
    }
  }

  function toggleSelectedBrand (brand, i) {
    if (i === selectedBrand) {
      props.setFilterBrand(null)
      setSelectedBrand(null)
    } else {
      props.setFilterBrand(brand)
      setSelectedBrand(i)
    }
  }

  function setOrder (field, type, i) {
    if (i === orderValue) {
      props.setOrder(null)
      setOrderValue('')
    } else {
      props.setOrder(field, type)
      setOrderValue(i)
    }
  }

  return (
    <div className={'side-filter-wrapper'}>
      <div className={'side-filter-element'}>
        <div className={'filter-element-header'}>
          Renk
        </div>
        <div className={'filter-option-wrapper'}>
          {
            filterOptions.color.map((color, i) => (
              <div key={'color-' + i} className={i === selectedColor ? ('filter-option filter-option-active') : ('filter-option')}
                   onClick={() => toggleSelectedColor(color.text, i)}>{color.text} ({color.value})</div>
            ))
          }
        </div>
      </div>
      <div className={'side-filter-element'}>
        <div className={'filter-element-header'}>
          Sıralama
        </div>
        <div className={'filter-option-wrapper'}>
          <div id={'order-0'} className={orderValue === '0' ? ('filter-option filter-option-active') : ('filter-option')} onClick={() => setOrder('discountedPrice', 'asc', '0')}>
            En Düşük Fiyat
          </div>
          <div id={'order-1'} className={orderValue === '1' ? ('filter-option filter-option-active') : ('filter-option')} onClick={() => setOrder('discountedPrice', 'desc', '1')}>
            En Yüksek Fiyat
          </div>
          <div id={'order-2'} className={orderValue === '2' ? ('filter-option filter-option-active') : ('filter-option')} onClick={() => setOrder('title', 'asc', '2')}>
            En Yeniler (A>Z)
          </div>
          <div id={'order-3'} className={orderValue === '3' ? ('filter-option filter-option-active') : ('filter-option')} onClick={() => setOrder('title', 'desc', '3')}>
            En Yeniler (Z>A)
          </div>
        </div>
      </div>
      <div className={'side-filter-element'}>
        <div className={'filter-element-header'}>
          Marka
        </div>
        <div className={'filter-option-wrapper'}>
          {
            filterOptions.brand.map((brand, i) => (
              <div key={'brand-' + i} className={i === selectedBrand ? ('filter-option filter-option-active') : ('filter-option')}
                   onClick={() => toggleSelectedBrand(brand.text, i)}>{brand.text} ({brand.value})</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}