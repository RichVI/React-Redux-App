const initialState = {
    isLoading: false,
    exchangeRateData: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_EXCHANGE_RATE':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_DATA_SUCCESS':
            return{
                ...state,
                isLoading: false,
                exchangeRateData: action.payload
            }
        default:
            return state;
    }
}