import axios from 'axios';

export const fetchExchangeRate = (currency) =>{
    return dispatch => {
        dispatch({type: 'FETCH_EXCHANGE_RATE'})
        axios.get(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then(res => {
            console.log(res) // res.data => exchange rate datas
            dispatch({type: 'FETCH_DATA_SUCCESS', payload: res.data})

        })
        .catch(err => console.log(err));
    }
}