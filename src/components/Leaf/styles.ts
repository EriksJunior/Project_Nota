import styled from "styled-components";
import Accordion from 'react-bootstrap/Accordion';


export const StyledAccordion = styled(Accordion)`

.accordion-button:focus{
    box-shadow: none;
}

.accordion-button:not(.collapsed){
    background-color: #1b022e;
    color: var(--bs-accordion-bg);  
}

.accordion-button::after {
}
`