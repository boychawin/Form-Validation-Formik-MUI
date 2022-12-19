import React from 'react'
import * as Yup from 'yup';

export const useStepDialog = () => {


    const [open, setOpen] = React.useState<boolean>(false)
    const cancelButtonRef = React.useRef(null)


    const initialValues = {
        field1: "",
        field2: "",
    };

    const validationSchemas = Yup.object().shape({
        field1: Yup.string().required(),
    });

    const validationSchemas2 = Yup.object().shape({
        field2: Yup.string().required(),
    });


    const onSubmits = async (values: any, { setErrors, setStatus, setSubmitting }: any) => {
        setErrors({ submit: false });
        setStatus({ success: JSON.stringify(values) });
        setSubmitting(false);
    }


    const closeDialog = () => {
        setOpen(false);
    }

    const openDialog = () => {
        setOpen(true);
    }

    return { open, setOpen,closeDialog,openDialog, cancelButtonRef, initialValues, onSubmits, validationSchemas, validationSchemas2 }
}