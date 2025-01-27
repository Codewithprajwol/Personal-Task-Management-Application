import {ReactElement,FC} from 'react'
import { ITaskDescription } from './interfaces/ITaskDescription'
import { Box, Typography } from '@mui/material'

export const TaskDescription:FC<ITaskDescription>=():ReactElement=>{
   return (
    <Box>
        <Typography>This is my description of Nepal</Typography>
    </Box>
   )
}