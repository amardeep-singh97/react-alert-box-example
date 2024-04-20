import { Box } from "@mui/material"
import ComponentOne from "./ComponentOne/indext"
import ComponentTwo from "./ComponentTwo"
import ComponentThree from "./ComponentThree/indext"


function App() {
  return (
    <Box display="flex">
      <ComponentOne/>
      <ComponentTwo/>
      <ComponentThree/>
    </Box>
  )
}

export default App
