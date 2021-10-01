import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCards } from '../redux/actions/cards';

import './app.scss';
import CardList from './CardList/CardList';
import Popup from './Popup/Popup';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  const { show } = useSelector(({ popup }) => {
    return popup;
  })

  return (
    <div className="app">
      <CardList />
      {
        show ? <Popup /> : ''
      }
      {/* <Popup open={showPopup} /> */}
    </div>
  );
}

export default App;
