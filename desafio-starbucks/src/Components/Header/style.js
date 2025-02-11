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

  .menu-icon {
    display: none;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 768px) {
      display: block;
    }
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

  @media (max-width: 768px) {
    display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #FFF;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
