import styled from "styled-components";

export const HeaderContainer = styled.header`
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFF;
  }

  img {
    position: relative;
    max-width: 80px;
  }
`;

export const Ul = styled.ul`
  position: relative;
  display: flex;

  li {
    margin-left: 2.05rem;
    list-style: none;
  }

  a {
    display: inline-block;
    color: #333;
    font-family: Poppins;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #017143;
    }
  }
`;
