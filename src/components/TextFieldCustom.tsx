import {
    TextField,
} from 'formik-material-ui';

export function TextFieldWithErrorMessage(props: any) {

    const hasError = !!props.form.errors[props.field.name];

    const inputProps = hasError
        ? {
            ...props.inputProps,
            'aria-errormessage': `${props.field.name}-helper-text`,
        }
        : props.inputProps;

    return <TextField {...props} inputProps={inputProps} />;
}