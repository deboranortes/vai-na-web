import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 20px;
  background-color: #d4edda;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 120px;
  min-height: calc(100vh - 120px);
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px 50px;
  }

  @media (min-width: 1024px) {
    padding: 30px 100px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 10px;
  }

  label {
    font-weight: bold;
    text-align: left;
    font-size: 14px;
    color: #017143;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
  
  input, textarea {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    background-color: #f9f9f9;
    color: #333;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #017143;
      outline: none;
    }

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
    max-height: 120px;

    @media (max-width: 767px) {
      min-height: 60px;
    }
  }

  button {
    padding: 8px 16px;
    background-color: #037143;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;


    &:hover {
      background-color: #015a36;
    }

    @media (max-width: 767px) {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;
