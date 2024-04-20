import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useAlertContext } from "./context";

function AlertBoxWithContext() : JSX.Element {

    const [alert, setAlert] = useAlertContext();

    const handleAllow = () : void => {
        if (alert.func === null) return;
        alert.func();
        closeDialog();
    }

    const closeDialog = () : void => {
        setAlert({ openAlert : false, message : "", func : null});
    }

    return <Dialog
    open={alert.openAlert}
    onClose={closeDialog}
    fullWidth
    maxWidth="md"
  >
    <DialogTitle>
     ALERT WITH CONTEXT!!
    </DialogTitle>
    <DialogContent>
      {alert.message}
    </DialogContent>
   <DialogActions>
        <Button
          onClick={handleAllow}
          autoFocus
        >
          Agree
        </Button>
      <Button onClick={closeDialog}>
          Disagree
      </Button>
    </DialogActions>
  </Dialog>;
}

export default AlertBoxWithContext;

