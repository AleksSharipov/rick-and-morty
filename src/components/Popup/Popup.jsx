import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPopup } from '../../redux/actions/popup';

import './popup.scss';

export default function Popup() {

  const dispatch = useDispatch();

  const { obj } = useSelector(({ popup }) => {
    return popup;
  })

  const onClosePopup = () => {
    dispatch(showPopup(false))
  }

  return (
    <section className="popup popup_opened">
      <div className="popup__content">
        <img alt={obj.name} src={obj.image} />
        <ul>
          <li>Name: <span>{obj.name}</span></li>
          <li>Status: <span>{obj.status}</span></li>
          <li>Species: <span>{obj.species}</span></li>
          {
            obj.type ? <li>Type: <span>{obj.type}</span></li> : ''
          }
          <li>Gender: <span>{obj.gender}</span></li>
        </ul>
        <button className="popup__close" onClick={() => { onClosePopup() }}>Close</button>
      </div>

    </section>
  )
}
