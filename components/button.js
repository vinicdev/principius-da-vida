import styled from "styled-components";

const BntLink = styled.a`
    padding: 10px 18px;

    background-color: ${props => props.backGround};
    color: ${props => props.color};
`;



export default function Button(props) {
    let backGround;
    let color;
    
    if (props.colorSelected === 'white') {
        backGround = 'var(--white003)';
        color = 'var(--blue004)';
    } else {
        backGround = 'var(--blue004)';
        color = 'var(--white003)';
    }

    return (
        <BntLink href={props.href} backGround={backGround} color={color}>
            {props.text}
        </BntLink>
    )
}