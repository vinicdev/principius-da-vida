import styled from "styled-components"
import TitleTop from "./title";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 80px;

    background-color: var(--yellow003);
`;

export default function Contact() {
    return (
        <Container id='contact'>
            <TitleTop
                text='Contato'
            />
        </Container>
    )
}