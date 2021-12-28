import React from 'react'
import { setModalFinished, setModalVisible } from '../../services/redux/actions/GeneralAction'
import { reduxStore } from '../../services/redux/ReduxIndex'

export default function Modal () {
  const { modalVisible } = reduxStore.getState().GeneralReducer

  function modalFinished (value) {
    setModalFinished(value)
    setModalVisible(false)
  }

  return (
    <>
      {
        modalVisible && (
          <div className={'modal-wrapper'}>
            <div className={'modal-header'}>
              Ürünü silmek istediğinize emin misiniz?
            </div>
            <div className={'modal-divider'}/>
            <div className={'modal-body'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
            </div>
            <div className={'modal-footer'}>
              <button id={'modal-confirm'} className={'modal-button success-button'} onClick={() => modalFinished(true)}>EVET</button>
              <button id={'modal-reject'} className={'modal-button error-button'} onClick={() => modalFinished(false)}>HAYIR</button>
            </div>
          </div>
        )
      }
    </>
  )
}