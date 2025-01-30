import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import {ReactElement,FC} from 'react'
import { ITaskFooter } from './interfaces/ITaskFooter'
import PropTypes from 'prop-types'
import { Status } from '../createTaskForm/enums/Status'
import { useMutation } from '@tanstack/react-query'
import { sendApiRequest } from '../../helpers/sendApiRequest'
import { IUpdateTask } from '../taskArea/interfaces/IUpdateTask'
export const TaskFooter:FC<ITaskFooter>=(props):ReactElement=>{
        const {onStatusChange=(e)=>console.log(e),onClick=(e)=>console.log(e),status,id}=props

        const updateTaskMutation=useMutation({
                mutationFn:async(data)=>await sendApiRequest<IUpdateTask>('http://localhost:3000/tasks','PUT',data) })
        return (
         <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                <FormControlLabel label="In Progress" control={<Switch defaultChecked={status==Status.inProgress?true:false} onChange={(e)=>onStatusChange(e)} color='warning' />} />
                <Button color='success' variant="contained" size="small" sx={{color:"#ffffff"}} onClick={(e)=>onClick(e)}>Mark Complete</Button>
         </Box>
        )   

}

TaskFooter.propTypes={
        onStatusChange:PropTypes.func,
        onClick:PropTypes.func,
}