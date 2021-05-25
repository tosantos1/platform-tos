import { Flex, VStack } from "@chakra-ui/react";
import { DayAccordion } from "../components/DashBody/DayAccordion";
import { DashHeader } from "../components/DashHeader";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <DashHeader />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <VStack>
          <Flex>
            <DayAccordion />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}
