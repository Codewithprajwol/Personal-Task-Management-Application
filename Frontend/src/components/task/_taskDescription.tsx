import {ReactElement,FC} from 'react'
import { ITaskDescription } from './interfaces/ITaskDescription'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const TaskDescription:FC<ITaskDescription>=():ReactElement=>{
   return (
    <Box mb={3}>
        <Typography>This is my description of Nepal</Typography>
    </Box>
   )
}

TaskDescription.prototype={
    description:PropTypes.string,
}