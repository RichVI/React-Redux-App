import React from 'react';
import './Rate.scss';

export const Rates = props =>{
    let rates = props.rates; 

        let result = Object.keys(rates).map(key =>{
        return [key, rates[key]];
    })

    console.log("Ratees", result);
    return(
        <div className="rateCards">
            {result.map(rates =>{
                console.log(rates)
                return (
                    
                <div className="rates" key={rates[0]}>{rates[0]}: {rates[1]}</div>
                
            )})}
        </div>
    )
}