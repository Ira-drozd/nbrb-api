import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import {connect} from "react-redux";
import {setNewCur} from "../../../store/currencyActions";

const SelectCur = ({curID, setNewCur}) => (
    <FormControl>
        <InputLabel id="label">Currency</InputLabel>
        <Select labelId="label"
                value={curID}
                onChange={e => setNewCur(e.target.value)}
        >
            <MenuItem value={'145'}>USD</MenuItem>
            <MenuItem value={'292'}>EUR</MenuItem>
            <MenuItem value={'298'}>RUR</MenuItem>
        </Select>
    </FormControl>
);

const mapStateToProps = (state) => ({
    curID: state.currency.curID,
})

const mapDispatchToProps = (dispatch) => ({
    setNewCur: id => dispatch(setNewCur(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectCur);