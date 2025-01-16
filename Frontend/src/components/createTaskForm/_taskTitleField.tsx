import {FC,ReactElement} from 'react'
import TextField from '@mui/material/TextField';
import {ITextField} from './interfaces/ITextfield'
import PropTypes from 'prop-types';
const TaskTitleField:FC<ITextField>=(props):ReactElement=>{
  const {onChange=(e)=>console.log(e),disabled=false}=props;

 return (
   <TextField
   id="title"
   label="Task Title"
   placeholder='Task Title'
   variant="outlined"
   size="small"
   name="title"
   fullWidth
   disabled={disabled}
   onChange={onChange}
   />
 )
}

TaskTitleField.propTypes={
    disabled:PropTypes.bool,
    onChange:PropTypes.func,
}

export default TaskTitleField;
