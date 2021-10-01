import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cards';

import './category.scss';

export default function Category() {

  const dispatch = useDispatch();

  const { items } = useSelector(({ cards }) => {
    return cards;
  });

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');

  // const [obj, setObj] = setState({
  //   'name': '',
  // })


  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(fetchCards(name, status, species, type, gender));
  };

  const handleClickReset = () => {
    dispatch(fetchCards());
    setName('');
    setStatus('');
    setSpecies('');
    setType('');
    setGender('');
  }

  return (
    <div className="category">
      <form onSubmit={(e) => {
        onSubmitForm(e)
      }}>
        <label>
          Имя:
          <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" />
        </label>
        <label>Статус:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
        </label>
        <label>Вид:
          <select value={species} onChange={(e) => setSpecies(e.target.value)}>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="humanoid">Humanoid</option>
          </select>
        </label>
        <label>Тип:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {
              items.map((item) => {
                return item.type ? <option key={item.id} value={item.type}>{item.type}</option> : ''
              })
            }
          </select>
        </label>
        <label>Пол:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>
          </select>
        </label>

        <div>
          <button>Сортировать</button>
          <button onClick={handleClickReset}>Reset</button>
        </div>
      </form>
    </div >
  )
}
