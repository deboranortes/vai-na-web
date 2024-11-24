import styled from "styled-components";

export const HeaderStyle = styled.header`

display: flex;
justify-content: space-around;
align-items: center;
`

export const Ul = styled.ul`
    display: flex;
    width: 40vw;
    justify-content: space-around;
    list-style: none;

    a {
    text-decoration: none;
    color: #1e3932;

    &:hover{
        color:palevioletred;
    }
    }
`;