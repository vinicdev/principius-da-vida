import styled from "styled-components"
import SimpleSlider from "./Carousel";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export default function Teaching() {
    return (
        <Container id="teaching">
            <SimpleSlider/>
        </Container>
    )
}