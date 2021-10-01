import React from 'react';
import Card from '../Card/Card';
import Category from '../Category/Category';

import './cardList.scss';

export default function CardList() {
  // const species = [
  //   { type: 'human' },
  //   { type: 'alien' },
  // ];

  return (
    <div>
      <Category />
      <div className="cards">
        <Card />
      </div>
    </div>
  )
}
