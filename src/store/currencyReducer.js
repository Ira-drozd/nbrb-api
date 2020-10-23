import {
    FETCH_CURRENCY_ERROR,
    FETCH_CURRENCY_START,
    FETCH_CURRENCY_SUCCESS, SET_CUR_ID,
    SET_NEW_DATE
} from "./actionTypes";

const dayMilliseconds = 24 * 60 * 60 * 1000;
const currentDate = new Date();
currentDate.setTime(currentDate.getTime() - dayMilliseconds * 6);

const initialState = {
    currency: [],
    curID: '145',
    loading: false,
    error: null,
    date: {
        startDate: currentDate,
        endDate: new Date(),
        key: 'selection'
    }
}

export default function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENCY_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_CURRENCY_SUCCESS:
            return {
                ...state,
                loading: false,
                currency: action.payload,
                error: null
            }
        case FETCH_CURRENCY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SET_NEW_DATE:
            return {
                ...state,
                date: action.payload
            }
        case SET_CUR_ID:
            return {
                ...state,
                curID: action.payload
            }
        default:
            return state
    }
}