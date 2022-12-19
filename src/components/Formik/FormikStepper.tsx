import {
    Box,
    CircularProgress,
    Grid,
    Step,
    StepLabel,
    Stepper,
} from '@mui/material';
import {
    Form,
    Formik,
} from 'formik';
import React, { useState } from 'react';
import CustomAlert from '../Alerts/CustomAlert';
import CustomButton from '../Buttons/CustomButton';


export function FormikStep({ children }: any) {
    return <div>{children}</div>;
}

export function FormikStepper({ children, ...props }: any) {
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
                // eslint-disable-next-line
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
                {({ errors, status, isSubmitting }: any) => (
                    <Form autoComplete="on">
                        <Stepper alternativeLabel activeStep={step}>
                            {childrenArray[0]?.props?.label && childrenArray.map((child: any, index: any) => (
                                <Step key={index} completed={step > index || completed}>
                                    <StepLabel>{child?.props?.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        {currentChild}
                        {/* {JSON.stringify(errors)} */}
                        <Box my={2}>
                            <CustomAlert status={status} errors={errors} />
                        </Box>
                        <Grid container >
                            <Grid item xs={6} className="p-1">
                                {step > 0 ? (
                                    <>
                                        <CustomButton
                                            fullWidth
                                            disabled={isSubmitting}
                                            variant="contained"

                                            onClick={() => setStep((s) => s - 1)}
                                        >
                                            back
                                        </CustomButton>
                                    </>
                                ) : null}
                            </Grid>
                            <Grid item xs={6} className="p-1" >

                                <CustomButton
                                    fullWidth
                                    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                    disabled={isSubmitting || (props.page == 1 && isLastStep())}
                                    variant="contained"
                                    type="submit"
                                >
                                    {isSubmitting ? "submitting" : isLastStep() ? "save" : "continue"}
                                </CustomButton>

                            </Grid>
                        </Grid>
                        <Grid >
                        </Grid>
                    </Form>
                )}
            </Formik>

        </>
    );
}

