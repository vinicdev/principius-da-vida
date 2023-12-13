import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    background-color: ${props => props.scrolled ? 'var(--yellow002)' : 'transparent'};
    transition: background-color 0.3s ease;

    @media (max-width: 870px) {
        padding: 0 15px;
    }

    @media (max-width: ${breakpoint}px) {
        padding: 0 20px;
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
    color: ${props => props.scrolled ? 'var(--blue004)' : 'var(--white002)'};
`;

const MenuButton = styled.button`
    display: none;
    cursor: pointer;
    background-color: transparent;
    border: none;

    svg {
        font-size: 1.5rem;
        color: ${props => props.scrolled ? 'var(--blue004)' : 'var(--white002)'}
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
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    padding: 30px;
`;

const Line = styled.hr`
    width: 100%;
    height: ${props => props.$height ? '1px' : '2px'};
    background-color: ${props => props.$color ? 'var(--black002)' : 'var(--black001)'};
    border: none;
`;


export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <TopNav $scrolled={scrolled.toString()}>
            <Image
                src={images.logo.src}
                width={151}
                height={101}
                alt={images.logo.alt}
            />

            <Nav>
                <List>
                    <LinkList $scrolled={scrolled.toString()} >
                        <Link href="#">quem somos</Link>
                    </LinkList>

                    <LinkList $scrolled={scrolled.toString()}>
                        <Link href="#">ensino</Link>
                    </LinkList>

                    <LinkList $scrolled={scrolled.toString()}>
                        <Link href="#">contato</Link>
                    </LinkList>

                    <LinkList>
                        <Button
                            text='Matrículas'
                            href='#'
                        />
                    </LinkList>
                </List>
            </Nav>

            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} $scrolled={scrolled.toString()}>
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
                            <Link href="#">quem somos</Link>
                        </LinkList>

                        <Line />

                        <LinkList>
                            <Link href="#">ensino</Link>
                        </LinkList>

                        <Line />

                        <LinkList>
                            <Link href="#">contato</Link>
                        </LinkList>

                        <Line />

                        <LinkList>
                            <Button
                                text='Matrículas'
                                href='#'
                            />
                        </LinkList>
                    </ListMobile>
                </MobileMenu>
            )}
        </TopNav>
    )
}