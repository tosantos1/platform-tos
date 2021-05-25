import { Accordion } from "@chakra-ui/react";

import { AccordionMonday } from "./AccordionSection";

export function DayAccordion() {
  return (
    <Accordion
      mb={4}
      minWidth="1000px"
      maxWidth="1000px"
      defaultIndex={[0]}
      allowMultiple
    >
      <AccordionMonday title="Segunda Feira" />
      <AccordionMonday title="Terça Feira" />
          
    </Accordion>
  );
}
