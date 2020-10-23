import React from 'react';
import classes from './Chart.module.scss'
import {connect} from "react-redux";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const Chart = ({currency}) => {
    return (
        <div className={classes.Chart}>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={currency}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="date"/>
                    <YAxis domain={['auto', 'auto']}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="rate" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
};

const mapStateToProps = (state) => ({
    currency: state.currency.currency,
})

export default connect(mapStateToProps)(Chart);