import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchExchangeRate } from '../actions';
import { Rates } from './Rates';
import './exchangeRateTable.scss';

const ExchangeRateTable = props => {


    return(
        <div className="exchangeRateTable">
            {!props.exchangeRateData && !props.isLoading && <h4>Please input currency</h4>}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
             />
            )}
            {props.exchangeRateData && !props.isLoading && (
                <div>
                    <p className="baseCurrency">Base Currency: {props.exchangeRateData.base}</p>
                    <h3>Today's Date: {props.exchangeRateData.date}</h3>
                    <Rates rates = {props.exchangeRateData.rates} />
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      exchangeRateData: state.exchangeRateData,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {fetchExchangeRate})(ExchangeRateTable);