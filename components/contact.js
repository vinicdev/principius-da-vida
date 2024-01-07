import styled from "styled-components"
import TitleTop from "./title";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Formulario from "./formulario";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 80px;
    gap: 40px;

    background-color: var(--yellow003);

    @media(max-width: 700px) {
        padding: 0 20px;
    }
`;

const ContainerPrincipal = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;

    @media(max-width: 929px) {
        justify-content: center;
    }
`;

const TextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const Texto = styled.p`
    width: 350px;

    @media(max-width: 929px) {
        width: 100%;
    }
`;


const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        color: var(--black003);
    }

    @media(max-width: 929px) {
        align-items: center;
    }
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
`;

const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--blue003);
    padding: 5px;
    color: var(--white003);
    border-radius: var(--border-radius);
    transition: .4s;

    &:hover {
        background-color: var(--blue005);
    }
`;

export default function Contact() {
    return (
        <Container id='contact'>
            <TitleTop
                text='Contato'
            />

            <ContainerPrincipal>
                <TextoContainer>
                    <Texto>Apreveite e conheça nossas redes sociais ou entre em contato via WhatsApp para marcar uma visita.</Texto>
                    <LinksContainer>
                        <h3>Mande uma mensagem</h3>
                        <Links>
                            <ButtonLink href='https://bio.viniciuscardoso.dev'>
                                <FaWhatsapp />
                                Entre em contato
                            </ButtonLink>
                        </Links>
                    </LinksContainer>
                </TextoContainer>

                <Formulario />
            </ContainerPrincipal>

        </Container>
    )
}