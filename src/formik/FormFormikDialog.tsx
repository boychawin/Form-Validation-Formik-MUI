
import Box from '@mui/material/Box';
import CustomDialog from '../components/Dialogs/CustomDialog';
import CustomButton from '../components/Buttons/CustomButton';
import { ForMikChildren, ForMikSingle } from '../components/Formik/ForMikSingle';
import Typography from '@mui/material/Typography';
import Page1 from './form/Page1';
import { useFormFormikDialog } from './useFormFormikDialog';
import Grid from '@mui/material/Grid';

export default function FormFormikDialog() {
  const { open, setOpen, closeDialog, openDialog, initialValues, onSubmits, validationSchemas } = useFormFormikDialog()

  return (
    <>
      <CustomButton onClick={openDialog}
        type="button"
        variant="contained"
        color="primary"
        fullWidth
      >
        Open Form
      </CustomButton>
      <CustomDialog
        open={open}
        setOpen={setOpen}
      //  setOpen={setOpen}
      >
        <Typography variant="h3" gutterBottom>
          Heading
        </Typography>
        <div>
          <ForMikSingle
            sx={{ width: '100%' }}
            initialValues={initialValues}
            onSubmit={onSubmits}
          >
            <ForMikChildren validationSchema={validationSchemas}>
              <Box paddingBottom={2} sx={{ mt: 5 }}>
                <Page1 />
              </Box>
            </ForMikChildren>
          </ForMikSingle>

          <Grid container className='my-1' >
            <Grid item xs={12} className='p-1' >
              <CustomButton
                className="p-1"
                color="error"
                // sx={{ my: 3 }}
                type="button"
                variant="contained"
                onClick={closeDialog}
                fullWidth
              >
                Close
              </CustomButton>
            </Grid>
          </Grid>

        </div>
      </CustomDialog>

    </>
  )
}

