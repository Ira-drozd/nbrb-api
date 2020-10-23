import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRange} from 'react-date-range';
import {connect} from "react-redux";
import {setNewChart} from "../../../store/currencyActions";

const SelectDate = ({date, setNewChart}) => (
    <DateRange
        editableDateInputs={true}
        onChange={item => setNewChart(item.selection)}
        moveRangeOnFirstSelection={false}
        ranges={[date]}
    />
)

const mapStateToProps = (state) => ({
    currency: state.currency.currency,
    date: state.currency.date

})

const mapDispatchToProps = (dispatch) => ({
    setNewChart: date => dispatch(setNewChart(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectDate);