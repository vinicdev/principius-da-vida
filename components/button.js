import Link from "next/link";
import styled from "styled-components";

const BntLink = styled.a`
    background-color: var(--blue004);
    padding: 10px 18px;
`;

export default function Button(props) {
    return (
        <BntLink href={props.href}>
            {props.text}
        </BntLink>
    )
}