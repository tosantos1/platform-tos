import { Stack } from "@chakra-ui/react";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

import { BiDumbbell, BiLockAlt } from "react-icons/bi";

export function SidebarNav() {
    return(
        <Stack spacing="12" align="flex-start" pos="fixed" w="64" mr="8" h="500px" bg="gray.800" p={8} borderRadius={20} >
            <NavSection title="GERAL">
                <NavLink icon={BiDumbbell}>
                    Dashboard
                </NavLink>
                <NavLink icon={BiLockAlt}>Novidades</NavLink>
            </NavSection>
        </Stack>
    )
}