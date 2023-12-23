import styled from "styled-components"
import Card from "./card";

const Container = styled.section`
    max-width: 100%;
    min-height: 100vh;
    padding: 20px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 700px) {
        padding: 20px;
    }
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    justify-content: center;

    
`;

export default function Teaching() {
    return (
        <Container id="teaching">
            <Title>Ensino</Title>
            <CardsContainer>
                <Card title="Infantil" />

                <Card title="Fundamental 1" />
            </CardsContainer>
        </Container>
    )
}