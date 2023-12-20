import styled from 'styled-components'
import Button from './button'

const Section = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--blue003);
    background-image: url(/aprovacao-colegio-militar.svg);
    background-position: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 60px;
`;

const Card = styled.div`
    width: 532px;
    height: 720px;
    background-color: var(--white003);
    border-radius: var(--border-radius);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h2`
    color: var(--blue003);
    font-size: 2.25rem;
    padding-bottom: 8px;
`;

const Text = styled.p`
    margin-bottom: 40px;
`;


export default function Approval() {
    return (
        <Section>
            <Card>
                <Title>
                    Referência em aprovação
                </Title>

                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>

                <Button href='#' text='Teste'/>
            </Card>
        </Section>
    )
}