import { Box, Chip, Typography } from '@mui/material'
import {ReactElement,FC} from 'react'
import { ITaskHeader } from './interfaces/ITaskHeader'
import {format} from "date-fns"
import PropTypes from 'prop-types'

export const TaskHeader:FC<ITaskHeader>=(props):ReactElement=>{
    const {title="Default Title",date=new Date()}=props
    return (
        <Box display={"flex"} width={"full"} alignItems={"center"} justifyContent={"space-between"} mb={3}>
            <Box>
                <Typography variant='h6'>{title}</Typography>
            </Box>
            <Box>
                <Chip variant='outlined' label={format(date,'PPP')}/>
            </Box>
        </Box>
    )
}

TaskHeader.propTypes={
    title:PropTypes.string,
    date:PropTypes.instanceOf(Date)
}