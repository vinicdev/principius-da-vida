import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import styled from "styled-components";

const CardConteiner = styled.div`
    width: 400px;
    height: 400px;
    padding: 20px;

    background-color: var(--white004);
    border-radius: var(--border-radius);

    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        font-size: 6rem;
        color: var(--blue003);
        margin-bottom: 30px;
    }

    h2 {
        padding-bottom: 15px;
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

        </CardConteiner>
    )
}