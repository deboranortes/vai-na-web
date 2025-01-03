import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.backgroundColor || "#037143"};
  clip-path: circle(600px at right 700px);
  transition: background 0.3s ease;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextBox = styled.article`
  max-width: 700px;

  h2 {
    color: #333;
    font-size: 4em;
    line-height: 1.4em;
    font-weight: 400;
  }

  h2 span {
    color: #017143;
    font-size: 1.2em;
    font-weight: 900;
  }

  p {
    color: #333;
    font-weight: 500;
  }

  a {
    display: inline-block;
    margin-top: 20px;
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

export const ImgBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  margin-top: 50px;

  img {
    max-width: 370px;
  }
`;

export const ThumbnailList = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;

  li {
    list-style: none;
    display: inline-block;
    cursor: pointer;
    transition: 0.5s;
  }

  li:hover {
    transform: translateY(-15px);
  }

  img {
    max-width: 100px;
  }
`;

export const SocialIconsList = styled.ul`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  li {
    list-style: none;
  }

  li:hover {
    transform: translateY(-4px);
  }

  a {
    display: inline-block;
    margin: 5px 0;
    transform: scale(0.6);
    filter: invert(1);
  }
`;
