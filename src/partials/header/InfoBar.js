import React from 'react'
import { reduxStore } from '../../services/redux/ReduxIndex'
import { setOrderValue } from '../../services/redux/actions/GeneralAction'

export default function InfoBar () {
  const { headerTitle } = reduxStore.getState().GeneralReducer
  const { searchKeyword } = reduxStore.getState().GeneralReducer
  const { orderValue } = reduxStore.getState().GeneralReducer

  function setOrder (e) {
    setOrderValue(e)
  }

  return (
    <div className={'info-wrapper'}>
      <div className="category-wrapper">
        <div className={'category'}>
          {headerTitle}
        </div>
        <div className={'search-keyword-wrapper'}>
          {
            searchKeyword != null && (
              <>
                <div className={'search-keyword-label'}>
                  Aranan Kelime:
                </div>
                <div className={'search-keyword'}>
                  {searchKeyword}
                </div>
              </>
            )
          }
        </div>
      </div>
      <div className="filter-wrapper">
        <select className="custom-select" value={orderValue} onChange={(e) => setOrder(e.target.value)}>
          <option value="" disabled={true} hidden>Sıralama</option>
          <option value="0">En Düşük Fiyat</option>
          <option value="1">En Yüksek Fiyat</option>
          <option value="2">En Yeniler (A>Z)</option>
          <option value="3">En Yeniler (Z>A)</option>
        </select>
      </div>
    </div>
  )
}