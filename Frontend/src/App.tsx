import { CssBaseline, ThemeProvider } from '@mui/material'
import  {FC,ReactElement}from 'react'
import { customTheme } from './themes/CusotmTheme'
import Dashboard from './pages/dashboard/Dashboard'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ComposeContext from './components/context/compose.context'
import { rootContext } from './components/context/root.context'

const queryClient=new QueryClient()
const App:FC= ():ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
       <ThemeProvider theme={customTheme}>
      <CssBaseline/>
    <Dashboard/>
    </ThemeProvider>
    </ComposeContext>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
   
  )
}

export default App