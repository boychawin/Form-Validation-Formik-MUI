import React from 'react'
import * as Yup from 'yup';

export const useFormFormikDialog = () => {

    const [open, setOpen] = React.useState<boolean>(false)


    const initialValues = {
        test: "",
        // field2: "",
    };

    const validationSchemas = Yup.object().shape({
        test: Yup.string().required(),
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

    return { open, setOpen, closeDialog, openDialog, initialValues, onSubmits, validationSchemas }
}