import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchExchangeRate } from '../actions';


export const ExchangeRateForm = props => {
    console.log("ExchangeRateForm props", props)
    
    const[currency, setCurrency] = useState({
        //amount: '',
        firstCurrency: '',
        //secondCurrency: ''
    });

    const handleChange = e => {
        setCurrency({
            ...currency,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.fetchExchangeRate(currency.firstCurrency);
        setCurrency({amount:'', firstCurrency:'', secondCurrency:''})
    }


    return (
        <form onSubmit={handleSubmit}>
            {/* <input name="amount" type="number" value={currency.amount} onChange={handleChange}/> */}
            <input name="firstCurrency" type="text" value={currency.firstCurrency} onChange={handleChange}/>
            {/* <input name="secondCurrency" type="text" value={currency.secondCurrency} onChange={handleChange}/> */}
            <button>Exchange</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      exchangeRateData: state.exchangeRateData,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {fetchExchangeRate})(ExchangeRateForm);