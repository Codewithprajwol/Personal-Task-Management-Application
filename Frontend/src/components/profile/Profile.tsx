import { Avatar, Box, Typography } from '@mui/material'
import {FC,ReactElement} from 'react'
import PropTypes from 'prop-types'

interface test{
  name?:string;
}
const Profile:FC<test> = ({name='ram'}):ReactElement => {
    
  return (
    <Box display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
    >
        <Avatar
        sx={{
           width:'96px',
           height:'96px',
           backgroundColor:'primary.main',
           marginBottom:'16px'   
        }}><Typography variant="h4" color="text.primary">{`${name.substring(0,1)}`}</Typography></Avatar>
        <Typography variant="h6" color="text.primary">{`Welcome, ${name}`}</Typography>
        <Typography variant="body1" color="text.primary">
            This is your personal task manager
        </Typography>
    </Box>
  )
}

Profile.propTypes={
    name:PropTypes.string.isRequired,

}
//?if my component name is Profile and then i have imported prop-types then we can do Profile.proptypes={name:proptypes.string} and it will checks in runtime the props should have name props and it's should be string right and if it not string or name is not there it  will through an log message


export default Profile