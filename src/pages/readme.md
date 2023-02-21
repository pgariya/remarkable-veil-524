Keep all the pages here you make and dont forget to add in AllRoutes file other wise it will not get routed.

********** IMPORTANT WORK TO DO ***************

What ever page you make first return `<Box></Box>` like this and `import styles.css` from `styles folder` and keep the `className="container"` of the Box.

Why?--->It will keep your pages below navbar with height of 80px so that you content of page doesnt hide behind the Navbar.

import { Box } from "@chakra-ui/react";
import "../styles/styles.css"

export default function Homepage(){


    return <Box className="container">

        Homepage

    </Box>
}