import React from 'react'
import Basket from '../partials/header/Basket'
import SearchBox from '../partials/header/SearchBox'
import InfoBar from '../partials/header/InfoBar'

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {

    return (
      <>
        <div className={'header-wrapper'}>
          <div className={'header'}>
            <div className={'logo-wrapper'}/>
            <SearchBox/>
            <Basket visible={false}/>
          </div>
        </div>
        <InfoBar/>
      </>
    )
  }

}

export default Header