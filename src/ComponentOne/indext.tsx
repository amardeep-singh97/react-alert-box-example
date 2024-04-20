import { Box, Button, Divider, Typography } from "@mui/material"
import { useAlertContext } from "../AlertBoxWithContext/context"
import { mountAlert } from "../AlertBox";

function ComponentOne() : JSX.Element {
    const [, setAlert] = useAlertContext();

    const openAlertWithContext = (): void => {
        setAlert({ openAlert : true, message : "Alert Opened by Context", func : () => {}})
    }

    const openAlert = (): void => {
        mountAlert({ openAlert : true, message : "Class Alert Opened", func : () => {}})
    }

    return <Box  sx={{ width : 500, height : 400, borderRadius: 2, boxShadow: 3, m: 2}}>
        <Typography justifyContent="center" padding={1} variant="h3">Component One</Typography>
        <Divider/>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 5}}>
        <Button onClick={openAlertWithContext}>Open Alert With Context</Button>
        <Button onClick={openAlert}>Open Alert</Button>
        </Box>
    </Box>
}

export default ComponentOne;