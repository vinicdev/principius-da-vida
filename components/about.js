import styled from "styled-components"
import Button from "./button";

const AboutContainter = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;

    @media(max-width: 1420px) {
        padding: 20px 40px;
    }

    @media(max-width: 1300px) {
        justify-content: center;
        gap: 40px;
    }

    @media(max-width: 700px) {
        padding: 20px;
    }
`;

const ConteinerText = styled.div`
    width: 45%;
    height: 420px;

    @media(max-width: 1300px) {
        width: 100%;
    }
`;

const SmallText = styled.span`
    font-size: .875rem;
    color: var(--black001);
`;

const Title = styled.h2`
    max-width: 450px;
    color: var(--black005);
`;

const Text = styled.p`
    max-width: 650px;
    margin-bottom: 30px;
    color: var(--black002);
`;

const ImageContainer = styled.div`
    width: 45%;
    height: 360px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border-radius: var(--border-radius);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media(max-width: 1300px) {
        width: 100%;
    }

    @media(max-width: 800px) {
        display: none;
    }
`;

const Div1 = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    background-color: red;
    background-image: url(/div2.jpg);
    background-size: cover;
`;

const Div2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    background-color: blue;
    background-image: url(/div1.jpg);
    background-size: cover;
`;

const Div3 = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    background-color: yellow;
    background-image: url(/div3.jpg);
    background-size: cover;
`;

export default function About() {
    return (
        <AboutContainter id="about">
            <ConteinerText>
                <SmallText>Quem somos</SmallText>

                <Title>
                    A educação é a arma mais poderosa
                </Title>

                <Text>
                    Lorem velit commodo veniam magna ipsum est non. Exercitation ullamco duis non non deserunt reprehenderit. Aute et officia amet ea ex voluptate laboris non veniam.Esse minim duis in adipisicing quis excepteur elit cillum irure ipsum Lorem nulla. Labore nostrud eu ex ea anim sint quis. Amet labore nisi pariatur fugiat dolore fugiat ea ex nisi do. Nostrud cillum do sit nisi consectetur enim commodo esse dolor. Dolor elit commodo id et proident. Exercitation anim deserunt ut eu labore sunt ut officia eiusmod ex ut.
                </Text>

                <Button
                    href="#"
                    text="Faça sua matrícula"
                />
            </ConteinerText>

            <ImageContainer>
                <Div1></Div1>

                <Div2></Div2>

                <Div3></Div3>
            </ImageContainer>
        </AboutContainter>
    )
} 