import {
    Box,
    CircularProgress,
    Grid,
} from '@mui/material';
import {
    Form,
    Formik,
} from 'formik';
import React, { useState } from 'react';
import CustomAlert from '../Alerts/CustomAlert';
import CustomButton from '../Buttons/CustomButton';


export function ForMikChildren({ children }: any) {
    return <>{children}</>;
}

export function ForMikSingle({ t, onSaves, labelButton, children, ...props }: any) {

    const childrenArray: any = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild: any = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <>
            <Formik
                {...props}
                validationSchema={currentChild.props.validationSchema}
                onSubmit={async (values: any, helpers: any) => {
                    if (isLastStep()) {
                        await props.onSubmit(values, helpers);
                        setCompleted(true);
                    } else {
                        setStep((s) => s + 1);
                        helpers.setTouched({});
                    }
                }}
            >
                {({ errors, status, isSubmitting, values }: any) => (
                    <Form autoComplete="on">
                        {currentChild}
                        <Box my={2}>
                            <CustomAlert status={status} errors={errors} />
                        </Box>
                        <Grid container className='my-1' hidden={props?.buttonDisabled}>
                            <Grid item xs={12} className='p-1' >
                                <CustomButton
                                    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                    disabled={isSubmitting || props?.buttonDisabled}
                                    onClick={onSaves}
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                >
                                    {!!labelButton ? labelButton : isSubmitting ? "submitting" : isLastStep() ? "save" : ""}
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>

        </>
    );
}

