import React from 'react'
import icon from '../../images/search-icon.svg'
import { setSearchedKeyword } from '../../services/redux/actions/GeneralAction'

export default function SearchBox () {

  function search (input) {
    let result = null

    if (input.length > 1)
      result = input

    setSearchedKeyword(result)
  }

  return (
    <div className={'search-wrapper'}>
      <span className="prefix"><img alt={'search-icon'} src={icon}/></span>
      <input id={'search-input'} type="text" className={'search-input'} placeholder={'25 milyon’dan fazla ürün içerisinde ara'} onChange={(e) => search(e.target.value)}/>
    </div>
  )
}