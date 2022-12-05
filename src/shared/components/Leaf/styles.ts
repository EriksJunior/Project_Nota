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
    margin-bottom: 15px;
`

export const BButton = styled(Button)`
    background: #C0C0C0;
    color: black;
    font-weight: bold;
    border-right: 2px solid #8A2BE2;
    border-left: 2px solid #8A2BE2;


    &:hover {
    background: BlueViolet;
    color: whitesmoke;
  }
`