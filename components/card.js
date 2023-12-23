import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import styled from "styled-components";
import Button from "./button";

const CardConteiner = styled.div`
    width: 400px;
    height: 400px;
    padding: 20px;

    background-color: var(--blue003);
    border-radius: var(--border-radius);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 6rem;
        color: var(--yellow003);
        margin-bottom: 30px;
    }

    h2 {
        padding-bottom: 15px;
        color: var(--white003);
    }

    p {
        margin-bottom: 25px;
        color: var(--white005);
    }

    @media(max-width:700px) {
        width: 95%;
    }
`;

export default function Card(props) {
    return (
        <CardConteiner>
            {props.title === 'Infantil' ?
                <MdChildFriendly /> :
                <FaChild />
            }
            <h2>{props.title}</h2>

            <p>
                Lorem velit commodo veniam magna ipsum est non. Exercitation ullamco duis non non deserunt reprehenderit.u
            </p>

            <Button 
                href='#'
                text='Saiba mais'
                colorSelected='white'
            />

        </CardConteiner>
    )
}