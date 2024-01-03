import styled from "styled-components"
import { images } from "../utils/images";
import NavBar from "./navBar";

const Header = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url(${images.bgHeader.src});
    /* background-image: url('/bg.jpg'); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Title = styled.h1`
    color: var(--white001);
    max-width: 900px;
    text-align: center;
    margin: 0 auto;
    padding-top: 168px;
    padding: 298px 20px 0;
    font-size: clamp(1.5rem, 4vw, 4rem);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TitleMarked = styled.u`
    text-decoration: none;
    color: var(--blue003);
`;

export default function TopHeader() {
    return (
        <Header>
            <NavBar />
        <Title>
            Educando com <TitleMarked>amor</TitleMarked> e <TitleMarked>princípius.</TitleMarked>
        </Title>
        </Header>
    )
}