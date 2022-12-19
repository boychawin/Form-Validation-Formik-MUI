import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const CustomButton = ({ children, ...props }: any) => (<Button
  {...props}
  size="small"
  startIcon={props?.startIcon ? <CircularProgress size="1rem" /> : null}

  disabled={props?.disabled ? props.disabled : false}
  variant={props?.variant ? props.variant : `contained`}
  type={props?.type ? props.type : 'button'}
>
  {children}
</Button>
);
export default CustomButton;