import Grid from '@mui/material/Grid'
import './App.css'
import StepFormDialog from './formik/StepDialog'



function App() {


  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <StepFormDialog />
        </Grid>
      </Grid>
    </>
  )
}

export default App
