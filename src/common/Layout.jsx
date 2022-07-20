import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";


export default function Layout({children}){
    return (
        <Box>
            <Navbar />
            <Box>
                {children}
            </Box>
        </Box>
    )
}