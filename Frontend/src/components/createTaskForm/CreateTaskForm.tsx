import { Box, Stack, Typography } from '@mui/material'
import {FC,ReactElement}from 'react'
import TaskTitleField from './_taskTitleField'
import TaskDescriptionField from './_taskDescriptionField'
import DateField from './_taskDateField'

const CreateTaskForm:FC = ():ReactElement => {
  return (
    <Box>
        <Typography mb={2} mt={2} px={2} component="h2" variant="h6">Create A Task</Typography>
        <Stack spacing={2} p={1}>
        <TaskTitleField />
        <TaskDescriptionField />
        <DateField />
        </Stack>
    </Box>
  )
}

export default CreateTaskForm