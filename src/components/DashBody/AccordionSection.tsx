import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  SimpleGrid,
  Heading,
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface AccordionSectionProps {
  title: string;
}

export function AccordionMonday({ title }: AccordionSectionProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <AccordionItem mb={4} border={0}  >
      <h2>
        <AccordionButton borderRadius={2} bg="gray.800">
          <Box flex="1" textAlign="left" >
            <Checkbox colorScheme="green">{title}</Checkbox>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel bg="gray.800" pb={4}>
        <SimpleGrid columns={3} spacing={10}>
          <Box bg="gray.800" height="100%" borderRadius={8} p={6}>
            <Heading as="h1" size="lg" textAlign="center" mb={4} isTruncated>
              Exercício 1
            </Heading>
            <Heading as="h2" fontWeight="extrabold" size="sm" isTruncated>
              PLANK TWIST
            </Heading>
            <Text as="p" fontWeight="light" color="gray.400">
              3X 8 A 12 (CADA LADO)
            </Text>

            <Button id="opa" colorScheme="red" mt={2} onClick={onOpen}>
              Vídeo
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent bg="gray.800">
                <ModalHeader>Tutorial Exercício</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <AspectRatio maxW="560px" ratio={1}>
                    <iframe
                      title="naruto"
                      src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                      allowFullScreen
                    />
                  </AspectRatio>
                </ModalBody>

                <ModalFooter>
                  <Button
                    bg="#7058f9"
                    _hover={{ opacity: 0.9 }}
                    mr={3}
                    onClick={onClose}
                  >
                    Fechar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>

          <Box bg="gray.800" height="100%" borderRadius={8} p={6}>
            <Heading as="h1" size="lg" textAlign="center" mb={4} isTruncated>
              Exercício 2
            </Heading>
            <Heading as="h2" fontWeight="extrabold" size="sm" isTruncated>
              TURKISH SIT UP
            </Heading>
            <Text as="p" fontWeight="light" color="gray.400">
              3X 8 A 15 (CADA LADO)
            </Text>
            <Button colorScheme="red" mt={2} onClick={onOpen}>
              Vídeo
            </Button>

           
          </Box>

          <Box bg="gray.800" height="100%" borderRadius={8} p={6}>
            <Heading as="h1" size="lg" textAlign="center" mb={4} isTruncated>
              Exercício 3
            </Heading>
            <Heading as="h2" fontWeight="extrabold" size="sm" isTruncated>
              LEG PIKE
            </Heading>
            <Text as="p" fontWeight="light" color="gray.400">
              3X 15"' A 20"
            </Text>
            <Button colorScheme="red" onClick={onOpen} mt={2}>
              Vídeo
            </Button>

           
          </Box>
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
