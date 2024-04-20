import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { createPortal } from "react-dom";

interface State {
    openAlert : boolean;
    message : string;
    func : null | (() => void);
  }
  
// eslint-disable-next-line react-refresh/only-export-components
export let mountAlert : ({openAlert, message, func} : {openAlert: boolean; message : string; func : () => void}) => void;
  
class AlertBox extends React.Component<unknown,State> {
    constructor(props: unknown) {
      super(props)
      this.state = {
        openAlert : false,
        message: "",
        func: null
      };
      mountAlert = this.mountAlert;
    }
  
  
    mountAlert = ({openAlert, message, func} : State) : void => {
      this.setState(() => {
        return {openAlert, message, func};
      })
    }
  
    handleAllow = () : void => {
      if (this.state.func === null) return;
      this.state.func();
      this.closeDialog();
    }
  
    closeDialog = () : void => {
      this.setState(() => {
        return {
        openAlert : false,
        message: "",
        func: null
        };
      })
    }
  
    
    render() : React.ReactNode {
      const AlertBox = () : JSX.Element => {
        return (
          <Dialog
            open={this.state.openAlert}
            onClose={this.closeDialog}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle>
             ALERT!!
            </DialogTitle>
            <DialogContent>
              {this.state.message}
            </DialogContent>
           <DialogActions>
              {this.state.func !== null && (
                <Button
                  onClick={this.handleAllow}
                  autoFocus
                >
                  Agree
                </Button>
              )}
              <Button onClick={this.closeDialog}>
                  Disagree
              </Button>
            </DialogActions>
          </Dialog>
        )
      }
      return createPortal(<AlertBox/>, document.body);
    }
  
  }
  
  export default AlertBox;