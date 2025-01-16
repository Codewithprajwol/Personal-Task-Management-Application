import Grid from '@mui/material/Grid2';
import {FC,ReactElement} from 'react'
import Taskarea from '../../components/taskArea/Taskarea';
import Sidebar from '../../components/sidebar/Sidebar';


const Dashboard:FC = ():ReactElement => {
  return (
    <Grid container minHeight={"100vh"} p={0} m={0} spacing={2}>
    <Taskarea/>
    <Sidebar />
    </Grid>
  
  )
}

export default Dashboard
