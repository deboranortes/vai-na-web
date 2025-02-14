import styled from "styled-components";

export const Section = styled.section`
background-color: #1e3932;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  padding: 4rem;
  padding-right: 2rem;
  padding-top: 144px;

  img {
    max-width: 50%;
    margin-right: 2rem;
  }
`;

export const Div = styled.div`
  max-width: 600px;
  width: 100%;
  margin-top: 4rem;
  color: #fff;

  h3 {
    font-size: 1rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 400;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-block;
    padding: 8px 20px;
    background: #037143;
    color: #fff;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    transition: backgroun 0.3s ease;

    &:hover {
      background: #015a36;
    }
  }
`;
