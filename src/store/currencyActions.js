import axios from 'axios'
import {
    FETCH_CURRENCY_ERROR,
    FETCH_CURRENCY_START,
    FETCH_CURRENCY_SUCCESS, SET_CUR_ID,
    SET_NEW_DATE
} from "./actionTypes";

export const fetchCurrency = () => (async (dispatch, getState) => {
    dispatch(fetchCurrencyStart())

    const curID = getState().currency.curID
    const startDate = getState().currency.date.startDate
    const endDate = getState().currency.date.endDate

    const shortStartDate = startDate.getFullYear()
        + '-' + ('0' + (startDate.getMonth() + 1)).slice(-2)
        + '-' + ('0' + startDate.getDate()).slice(-2);

    const shortEndDate = endDate.getFullYear()
        + '-' + ('0' + (endDate.getMonth() + 1)).slice(-2)
        + '-' + ('0' + endDate.getDate()).slice(-2);


    try {
        const response = await axios.get(
            `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${curID}?startDate=${shortStartDate}&endDate=${shortEndDate}`
        )
        const currency = []

        response.data.forEach(obj => {
                const date = new Date(obj['Date']).toLocaleString().split(',')[0]

                currency.push({
                    date: date,
                    rate: obj['Cur_OfficialRate']
                })
            }
        )

        dispatch(fetchCurrencySuccess(currency))

    } catch (e) {
        dispatch(fetchCurrencyError(e))
    }
})

export const fetchCurrencyStart = () => ({
    type: FETCH_CURRENCY_START
})

export const fetchCurrencySuccess = (currency) => ({
    type: FETCH_CURRENCY_SUCCESS,
    payload: currency
})

export const fetchCurrencyError = (e) => ({
    type: FETCH_CURRENCY_ERROR,
    payload: e
})


export const setNewDate = (date) => ({
    type: SET_NEW_DATE,
    payload: date
})

export const setNewChart = (date) => (dispatch => {
    dispatch(setNewDate(date))
    dispatch(fetchCurrency())
})

export const setCurId = id => ({
    type: SET_CUR_ID,
    payload: id
})

export const setNewCur = (id) => (dispatch => {
    dispatch(setCurId(id))
    dispatch(fetchCurrency())
})
