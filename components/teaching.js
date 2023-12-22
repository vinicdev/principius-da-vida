import styled from "styled-components"
import Card from "./card";

const Container = styled.section`
    max-width: 100%;
    height: 100vh;
    margin: 0 80px;
    display: flex;
    align-items: center;
`;

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    justify-content: center;
`;

export default function Teaching() {
    return (
        <Container id="teaching">
            <CardsContainer>
                <Card title="Infantil" />

                <Card title="Fundamental 1" />
            </CardsContainer>
        </Container>
    )
}