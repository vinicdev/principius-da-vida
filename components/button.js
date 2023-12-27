import styled, { StyleSheetManager } from "styled-components";

const BntLink = styled.a`
    padding: 10px 18px;

    background-color: ${props => props.background};
    color: ${props => props.color};
`;

export default function Button(props) {
    let backgroundcolor;
    let colorbtn;

    if (props.colorSelected === 'white') {
        backgroundcolor = 'var(--white003)';
        colorbtn = 'var(--blue004)';
    } else {
        backgroundcolor = 'var(--blue004)';
        colorbtn = 'var(--white003)';
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'background' && prop !== 'color'}>
            <BntLink href={props.href} background={backgroundcolor} color={colorbtn}>
                {props.text}
            </BntLink>
        </StyleSheetManager>
    )
}