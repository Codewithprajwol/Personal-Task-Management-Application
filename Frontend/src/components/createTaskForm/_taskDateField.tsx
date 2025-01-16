import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import {FC, ReactElement} from "react"
import {IDateField} from './interfaces/IDateField'
import PropTypes from 'prop-types';

const DateField:FC<IDateField>=(props):ReactElement=>{
    const {disabled=false, value=new Date(),onChange=(samaya)=>console.log(samaya)}=props
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            value={value}
            onChange={onChange}
            label="Task Date"
            disabled={disabled}
             />
      </LocalizationProvider>
    )
    DateField.propTypes={
        disabled:PropTypes.bool,
        onChange:PropTypes.func,
        value:PropTypes.instanceOf(Date),
    }
}

export default DateField;