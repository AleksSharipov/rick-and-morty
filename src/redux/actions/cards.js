import axios from 'axios';

// export const fetchCards = (name, status, species, type, gender) => (dispatch) => {
export const fetchCards = (name, status, species, type, gender) => (dispatch) => {
  /**
   * https://rickandmortyapi.com/api/character/?name=rick&status=alive
   */
  axios.get(`https://rickandmortyapi.com/api/character${name === undefined ? '/' : `/?name=${name}`}${status === undefined ? '/' : `&status=${status}`}${species === undefined ? '/' : `&species=${species}`}${type === undefined ? '/' : `&type=${type}`}${gender === undefined ? '/' : `&gender=${gender}`}`)
    .then(({ data }) => {
      // console.log(data)
      dispatch(setCards(data.results))
    })
}

export const setCards = (items) => ({
  type: 'SET_CARDS',
  payload: items,
})