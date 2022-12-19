
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export default function CustomDialog({ open,setOpen,children }: any) {
    const [fullWidth, setFullWidth] = React.useState(true);

    return <>
        <Dialog

            // fullScreen={props?.fullScreen == true ? true : false}
            fullWidth={fullWidth}
            // maxWidth={props?.maxWidth ?? 'sm'}
            // cancelButtonRef={props?.cancelButtonRef}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={setOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent  sx={{minWidth: 350}}>
                <DialogContentText component="span" id="alert-dialog-slide-description">
                    {children ?? ""}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </>
}
