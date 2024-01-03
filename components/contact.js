import styled from "styled-components"
import React, { useState } from 'react';
import TitleTop from "./title";
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { MdChildFriendly } from "react-icons/md";
import Modal from "./modal";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    flex-wrap: wrap;
    gap: 40px;

    background-color: var(--yellow003);
`;

const Texto = styled.p`
    max-width: 350px;
`;

const TextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        color: var(--black003);
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

const ButtonModal = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    background-color: var(--blue003);
    height: 35px;
    padding: 0 5px;
    color: var(--white003);
    border-radius: var(--border-radius);
    transition: .4s;
    border: none;
    font-size: 1rem;

    &:hover {
        background-color: var(--blue005);
    }
`;

const ContainerIcon = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;

const LinksSeparation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
        margin: 0;
    }
`;

export default function Contact() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Container id='contact'>
            <TitleTop
                text='Contato'
            />

            <TextoContainer>
                <Texto>Apreveite e conheça nossas redes sociais ou entre em contato via WhatsApp para marcar uma visita.</Texto>
                <LinksContainer>
                    <h3>Mande uma mensagem</h3>
                    <Links>
                        <ButtonModal onClick={openModal}>
                            <FaWhatsapp />
                            Entre em contato
                        </ButtonModal>
                    </Links>
                </LinksContainer>

                {/* <LinksContainer>
                    <h3>
                        Redes Sociais
                    </h3>

                    <Links>
                        <ButtonLink href='https://www.instagram.com/principiusdavida/' target="_blank">
                            <FaInstagram />
                            Instagram
                        </ButtonLink>

                        <ButtonLink href='https://www.facebook.com/people/Escola-Princ%C3%ADpius-da-Vida/100087048267386/' target="_blank">
                            <FaFacebook />
                            Facebook
                        </ButtonLink>
                    </Links>
                </LinksContainer> */}
            </TextoContainer>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <span>Mande uma mensagem para gente</span>

                <ContainerIcon>
                    <LinksSeparation>
                        <p>Principius Junior</p>
                        <ButtonLink href='https://wa.me/5541995642047' target="_blank">
                            <IoIosSchool />
                            Junior
                        </ButtonLink>
                    </LinksSeparation>

                    <LinksSeparation>
                        <p>Principius Infantil</p>

                        <ButtonLink href='https://wa.me/5541984976929' target="_blank">
                            <MdChildFriendly />
                            Infantil
                        </ButtonLink>
                    </LinksSeparation>
                </ContainerIcon>
            </Modal>
        </Container>
    )
}