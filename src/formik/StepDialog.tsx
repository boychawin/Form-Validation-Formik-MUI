
import Box from '@mui/material/Box';
import CustomDialog from '../components/Dialogs/CustomDialog';
import CustomButton from '../components/Buttons/CustomButton';
import { useStepDialog } from './useStepDialog';
import { FormikStep, FormikStepper } from '../components/Formik/FormikStepper';
import Typography from '@mui/material/Typography';
import Step1 from './form/Step1';
import Step2 from './form/Step2';

export default function StepFormDialog() {
  const { open, setOpen, closeDialog, openDialog, cancelButtonRef, initialValues, onSubmits, validationSchemas, validationSchemas2 } = useStepDialog()

  return (
    <>
      <CustomButton onClick={openDialog}
        type="button"
        variant="contained"
        color="primary"
        fullWidth
      >
        Open Form Step
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
          <FormikStepper
            sx={{ width: '100%' }}
            initialValues={initialValues}
            onSubmit={onSubmits}
          >
            <FormikStep label={`Page 1`} validationSchema={validationSchemas}>
              <Box paddingBottom={2} sx={{ mt: 5 }}>
                <Step1 />
              </Box>
            </FormikStep>
            <FormikStep label={`Page 2`} validationSchema={validationSchemas2}>
              <Box paddingBottom={2} sx={{ mt: 5 }}>
                <Step2 />
              </Box>
            </FormikStep>
          </FormikStepper>
          <CustomButton
          className="p-1"
            color="error"
            sx={{ my: 1 }}
            type="button"
            variant="contained"
            onClick={closeDialog}
            fullWidth
          >
            Close
          </CustomButton>
        </div>
      </CustomDialog>

    </>
  )
}

