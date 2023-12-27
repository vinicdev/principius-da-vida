import styled from "styled-components"
import Card from "./card";
import TitleTop from "./title";

const Container = styled.section`
    max-width: 100%;
    min-height: 100vh;
    padding: 20px 80px;
    display: flex;
    gap: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media(max-width: 700px) {
        padding: 20px;
    }
`;

const TextContainer = styled.div`

    p {
        min-width: 250px;
        max-width: 400px;
    }
    
    @media(max-width: 1439px) {
        width: 80%;
    }

    @media(max-width: 999px) {
        width: 100%;
    }
`;

const Text = styled.p`
    margin-top: 20px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;  
`;

export default function Teaching() {
    return (
        <Container id="teaching">
            <TextContainer>
                <TitleTop text='Ensino' />
                <Text>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
                </Text>
            </TextContainer>
            <CardsContainer>
                <Card title="Infantil" />

                <Card title="Fundamental 1" />
            </CardsContainer>
        </Container>
    )
}