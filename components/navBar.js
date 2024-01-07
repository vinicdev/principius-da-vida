import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Button from "./button";
import { images } from "../utils/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const breakpoint = 700;

const TopNav = styled.div`
    width: 100%;
    height: 130px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    background-color: rgba(31,31,31,.3764705882);
    backdrop-filter: blur(10px);
    z-index: 1000;

    @media (max-width: 870px) {
        padding: 0 15px;
    }

    @media (max-width: ${breakpoint}px) {
        padding: 0 20px;
    }

    @media (max-width: 700px) {
        height: 95px;

        img {
            width: 130px;
            height: 80px;
        }
    }
`;

const Nav = styled.nav`
    @media (max-width: ${breakpoint}px) {
        display: none;
    }
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
`;

const ListMobile = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;

    padding: 40px 0 0 60px;
`;

const LinkList = styled.li`
    color: var(--white002);
`;

const MenuButton = styled.button`
    display: none;
    cursor: pointer;
    background-color: transparent;
    border: none;

    svg {
        font-size: 1.5rem;
        color: var(--white002);
    }

    @media (max-width: ${breakpoint}px) {
        display: flex;
    }
`;

const MobileMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    padding: 40px 30px;
`;

const Line = styled.hr`
    width: 100%;
    height: ${props => props.$height ? '1px' : '2px'};
    background-color: ${props => props.$color ? 'var(--black002)' : 'var(--black001)'};
    border: none;
`;


export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <TopNav>
            <Image
                src={images.logo2.src}
                width={151}
                height={101}
                alt={images.logo.alt}
            />

            <Nav>
                <List>
                    <LinkList>
                        <Link href="#about">quem somos</Link>
                    </LinkList>

                    <LinkList>
                        <Link href="#teaching">ensino</Link>
                    </LinkList>

                    <LinkList>
                        <Link href="#contact">contato</Link>
                    </LinkList>

                    <LinkList>
                        <Button
                            text='Matrículas'
                            href='/matricula'
                        />
                    </LinkList>
                </List>
            </Nav>

            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} >
                <GiHamburgerMenu />
            </MenuButton>
            
            {isMenuOpen && (
                <MobileMenu>
                    <MenuButton onClick={() => setIsMenuOpen(false)}>
                        <IoIosClose />
                    </MenuButton>
                    <Line $height $color/>

                    <ListMobile>
                        <LinkList >
                            <Link href="#about" onClick={() => setIsMenuOpen(false)}>quem somos</Link>
                        </LinkList>

                        <Line />

                        <LinkList>
                            <Link href="#teaching" onClick={() => setIsMenuOpen(false)}>ensino</Link>
                        </LinkList>

                        <Line />

                        <LinkList>
                            <Link href="#contact" onClick={() => setIsMenuOpen(false)} >contato</Link>
                        </LinkList>

                        <Line />

                        <LinkList>
                            <Button
                                text='Matrículass'
                                href='#'
                                colorSelected='secondary'
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </LinkList>
                    </ListMobile>
                </MobileMenu>
            )}
        </TopNav>
    )
}