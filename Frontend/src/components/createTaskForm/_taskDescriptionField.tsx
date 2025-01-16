import {FC,ReactElement} from 'react'
import TextField from '@mui/material/TextField';
import {ITextField} from './interfaces/ITextfield'
import PropTypes from 'prop-types';

const TaskDescriptionField:FC<ITextField>=(props):ReactElement=>{
  const {onChange=(e)=>console.log(e),disabled=false}=props;

 return (
    <TextField
    id="title"
    label="Task Description"
    placeholder='Task Description'
    variant="outlined"
    size="small"
    name="title"
    fullWidth
    multiline
    rows={4}
    disabled={disabled}
    onChange={onChange}
     />
    )
}

TaskDescriptionField.propTypes={
    disabled:PropTypes.bool,
    onChange:PropTypes.func,
}

export default TaskDescriptionField;