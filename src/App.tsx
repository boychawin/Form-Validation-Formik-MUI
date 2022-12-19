import Grid from '@mui/material/Grid'
import './App.css'
import StepFormDialog from './formik/FormFormikDialog'



function App() {


  return (
    <>
      <Grid container justifyContent={'center'} alignContent={'center'} sx={{mt:5}} >
        <Grid item xs={5}>
          <StepFormDialog />
        </Grid>
      </Grid>
    </>
  )
}

export default App
