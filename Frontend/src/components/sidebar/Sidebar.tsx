import {FC,ReactElement} from 'react'
import Grid from '@mui/material/Grid2';
import Profile from '../profile/Profile';
import CreateTaskForm from '../createTaskForm/CreateTaskForm';


const Sidebar:FC = ():ReactElement => {
  return (
    <Grid size={{ xs: 6, md: 4 }} sx={{
        height:'100vh',
        position:'fixed',
        right:0,
        top:0,
        widht:'100%',
        backgroundColor:'background.paper',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        // alignItems:'center',
    }}>
      <Profile name='Prajwol'/>
      <CreateTaskForm />
    </Grid>
  )
}

export default Sidebar