import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPopup, popupContent } from '../../redux/actions/popup';

import './card.scss';

export default function Card() {

  const dispatch = useDispatch();

  const { items } = useSelector(({ cards }) => {
    return cards;
  })

  const onCardClick = (obj) => {
    dispatch(showPopup(true))
    dispatch(popupContent(obj))
  }

  return (
    <>
      {
        items.map((card) => {
          return (
            <div key={card.id} className="card" >
              <img alt={card.name} src={card.image} />
              <div className="card__content">
                <ul>
                  <li>Name: <span

                  >{card.name}</span></li>
                  <li>Status: <span>{card.status}</span></li>
                  <li>Species: <span>{card.species}</span></li>
                  {
                    card.type ? <li>Type: <span>{card.type}</span></li> : ''
                  }
                  <li>Gender: <span>{card.gender}</span></li>
                </ul>
                <div className="card__btn">
                  <a
                    href={`https://rickandmortyapi.com/api/character/${card.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>API</button>
                  </a>
                  <button onClick={() => {
                    onCardClick(card)
                  }}>Подробнее</button>
                </div>

              </div>
            </div>
          )
        })
      }
    </>

  )
}
