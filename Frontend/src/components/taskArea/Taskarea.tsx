import {FC,ReactElement} from 'react'
import Grid from '@mui/material/Grid2';

const Taskarea:FC = ():ReactElement => {
  return (
    <Grid size={{ xs: 6, md: 8 }}>
    <h2>Content Area</h2>
  </Grid>
  )
}

export default Taskarea