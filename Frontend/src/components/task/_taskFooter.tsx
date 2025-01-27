import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import {ReactElement,FC} from 'react'
import { ITaskFooter } from './interfaces/ITaskFooter'
import PropTypes from 'prop-types'
export const TaskFooter:FC<ITaskFooter>=(props):ReactElement=>{
        const {onStatusChange=(e)=>console.log(e),onClick=(e)=>console.log(e)}=props
        return (
         <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <FormControlLabel label="In Progress" control={<Switch onChange={(e)=>onStatusChange(e)} color='warning' />} />
                <Button color='success' variant="contained" size="small" sx={{color:"#ffffff"}} onClick={(e)=>onClick(e)}>Mark Complete</Button>
         </Box>
        )   

}

TaskFooter.propTypes={
        onStatusChange:PropTypes.func,
        onClick:PropTypes.func,
}