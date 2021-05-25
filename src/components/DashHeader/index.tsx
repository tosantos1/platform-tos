import { Flex, useBreakpointValue, IconButton, Image, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "../Header/Logo";
import { Profile } from "./profile";
import { SearchBox } from "./SearchBox";

export function DashHeader() {
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg:true,
    })

    return(
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" px="6" align="center">
            { !isWideVersion && (
                <IconButton 
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}

            <Logo />  

            <SearchBox />

            <Flex align="center" ml="auto">
                <Profile />
            </Flex>
            
                
        </Flex>
    )
}