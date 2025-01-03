import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 100vh;
  background-color: #fff;
  
  padding-top: 200px;

  img {
    max-width: 23%;
    margin-right: 5rem;
  }
`;

export const Div = styled.div`
  max-width: 600px;
  margin-top: 3rem;
  color: #1E3932;

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
    background:#037143;
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
