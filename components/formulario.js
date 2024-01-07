import styled from "styled-components";
import Input from "./input";

const FormularioContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;

    @media(max-width: 929px) {
        width: 100%;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    resize: none;
    border-radius: var(--border-radius);
    border: none;
    padding-left: 8px;
    padding-top: 8px;
`;

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ButtonSubmit = styled.button`
    border: none;
    height: 30px;
    border-radius: var(--border-radius);
    background-color: var(--blue004);
    color: var(--white003);
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
`;

export default function Formulario() {
    return (
        <FormularioContainer>
            <Input
                name='nome'
                type='text'
                placeholder='Informe seu nome'
            />

            <Input
                name='telefone'
                type='number'
                placeholder='Informe seu número'
            />

            <ContainerText>
                <label>Sua mensagem</label>
                <TextArea placeholder='Escreva seu mensagem'></TextArea>
            </ContainerText>

            <ButtonSubmit type="submit">
                Enviar
            </ButtonSubmit>
        </FormularioContainer>
    )
}