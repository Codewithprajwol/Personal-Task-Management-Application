import { FC, ReactElement } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ISelectField } from "./interfaces/ISelectField";
import PropTypes from "prop-types";

const SelectField: FC<ISelectField> = (props): ReactElement => {
  const { name="selectBox", label="Select Box", value="", onChange=(e)=>console.log(e), items=[{value:'',label:'Add Items'}],disabled=false } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="status">{name}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-select`}
        value={value}
        label={label}
        onChange={onChange}
        name={name}
       disabled={disabled}
      >
        {items.map((item,index)=><MenuItem key={index} value={item.value}>{item.label}</MenuItem>)}
        
      </Select>
    </FormControl>
  );
};

SelectField.propTypes={
  onChange:PropTypes.func,
  label:PropTypes.string,
  name:PropTypes.string,
  disabled:PropTypes.bool,
  items:PropTypes.arrayOf(
    PropTypes.shape({
      value:PropTypes.string.isRequired,
      label:PropTypes.string.isRequired,
    }).isRequired
  )
}

export default SelectField;
