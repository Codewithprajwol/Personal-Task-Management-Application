import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import {ReactElement,FC} from 'react'
import { ITaskFooter } from './interfaces/ITaskFooter'
import PropTypes from 'prop-types'
import { Status } from '../createTaskForm/enums/Status'

export const TaskFooter:FC<ITaskFooter>=(props):ReactElement=>{
        const {onStatusChange=(e)=>console.log(e),onClick=(e)=>console.log(e),status,id}=props

       
        return (
         <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <FormControlLabel label="In Progress" control={<Switch defaultChecked={status==Status.inProgress?true:false} onChange={(e)=>onStatusChange(e,id)} color='warning' />} />
                <Button color='success' variant="contained" size="small" sx={{color:"#ffffff"}} onClick={(e)=>onClick(e,id)}>Mark Complete</Button>
         </Box>
        )   

}

TaskFooter.propTypes={
        onStatusChange:PropTypes.func,
        onClick:PropTypes.func,
}