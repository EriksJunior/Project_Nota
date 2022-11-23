import styled from "styled-components";
import { Accordion, Button } from 'react-bootstrap';

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

export const ContentButtons = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const BButton = styled(Button)`
    background: BlueViolet;
    color: whitesmoke;
    font-weight: bold;

    &:hover {
    background: BlueViolet;
    color: whitesmoke;
  }
`