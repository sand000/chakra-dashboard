import { Box } from "@chakra-ui/react";
import Navbar from "../common/Navbar";
import SearchSection from "../Home/SearchSection";

export default function Home(){
    return(
        <Box>
            <Navbar />
            <SearchSection />
        </Box>
    )
}