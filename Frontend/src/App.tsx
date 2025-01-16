import { CssBaseline, ThemeProvider } from '@mui/material'
import {FC,ReactElement}from 'react'
import { customTheme } from './themes/CusotmTheme'
import Dashboard from './pages/dashboard/Dashboard'

const App:FC= ():ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
    <Dashboard/>
    </ThemeProvider>
  )
}

export default App