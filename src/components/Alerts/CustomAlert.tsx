
import {
    Grid,
    Alert
} from '@mui/material';


export default function CustomAlert({ errors, status, error }: any) {
    return (
        <div>
            {/* {JSON.stringify(status)} */}
            {errors && errors?.submit && (
                <Grid item xs={12}>
                    <Alert severity="error">{errors?.submit}</Alert>
                </Grid>
            )}

            {status && status?.success && (
                <Grid item xs={12} >
                    <Alert severity="success">{status?.success ?? 'success'}</Alert>

                </Grid>
            )}

            {error && (
                <Grid item xs={12} >
                    <Alert severity="error">{error ?? ''}</Alert>

                </Grid>
            )}


        </div>
    )
}