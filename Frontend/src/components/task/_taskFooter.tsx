import { Box, Button, FormControlLabel, Switch } from '@mui/material'
import {ReactElement,FC} from 'react'

export const TaskFooter:FC=():ReactElement=>{
        return (
         <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={3}>
                <FormControlLabel label="In Progress" control={<Switch color='warning' />} />
                <Button color='success' variant="contained" size="small">Mark Complete</Button>
         </Box>
        )   

}