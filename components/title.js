import styled from "styled-components"

const TitleStyled = styled.h2`
    position: relative;
    display: inline-block;
    color: var(--black003);

    &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 50px; 
        height: 2px; 
        background-color: var(--black001);
        transform: translateX(-50%);
    }
`;

export default function TitleTop(props) {
    return (
        <>
            <TitleStyled>
                {props.text}
            </TitleStyled>
        </>
    )
}