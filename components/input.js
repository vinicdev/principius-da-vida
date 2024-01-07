import styled from "styled-components"

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        text-transform: capitalize;
    }

    input {
        border: none;
        padding-left: 8px;
        width: 100%;
        height: 35px;
        border-radius: var(--border-radius);
    }
`;

export default function Input(props) {
    return (
        <InputsContainer>
            <label for={props.name}>{props.name}</label>
            <input type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} required />
        </InputsContainer>
    )
}