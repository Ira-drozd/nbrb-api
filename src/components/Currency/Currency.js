import React, {useEffect} from 'react';
import classes from './Currency.module.scss'
import {connect} from "react-redux";
import {fetchCurrency} from "../../store/currencyActions";
import Chart from "./Chart/Chart";
import SelectDate from "./SelectDate/SelectDate";
import SelectCur from "./SelectCur/SelectCur";
import Loader from "../UI/Loader/Loader";

const Currency = ({loading, fetchCurrency, currency, error}) => {

    useEffect(() => {
        fetchCurrency()
    }, [fetchCurrency])

    return (
        <div className={classes.Currency}>
            <SelectCur/>
            {
                error
                    ? <p>Error!</p>
                    : loading && currency.length === 0
                    ? <Loader/>
                    : <Chart/>
            }
            <SelectDate/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    currency: state.currency.currency,
    loading: state.currency.loading,
    error: state.currency.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchCurrency: () => dispatch(fetchCurrency()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Currency);