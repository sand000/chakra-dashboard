import {Flex,Box,Button,Image, Spacer} from "@chakra-ui/react";
export default function Navbar(){
    return(
        <Box>
            <Flex gap="1rem" borderBottom="1px" borderColor="gray.200">
                <Image width="32px" src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=64&q=75"></Image>
                <Spacer/>
                <Button variant="ghost">Sign In</Button>
                <Button variant="outline">Sign Up</Button>
                <Button gap=".2rem" bgGradient="linear-gradient(to right, rgb(128, 90, 213), rgb(49, 130, 206))" variant="solid" background="purple.400">Post a job <span role="img" aria-label="Rocket">🚀</span></Button>
            </Flex>
        </Box>
    )
}

{/* <Box w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' /> */}
