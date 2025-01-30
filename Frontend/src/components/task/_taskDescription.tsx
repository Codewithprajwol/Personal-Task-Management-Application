import {ReactElement,FC} from 'react'
import { ITaskDescription } from './interfaces/ITaskDescription'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const TaskDescription:FC<ITaskDescription>=(props):ReactElement=>{
    const {description}=props
   return (
    <Box mb={3}>
        <Typography>{description}</Typography>
    </Box>
   )
}

TaskDescription.prototype={
    description:PropTypes.string,
}