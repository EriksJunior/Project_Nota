import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: #1c1c1c;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;

  @media screen and (max-width: 361px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: auto;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 361px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const SettingsContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;

  @media screen and (max-width: 361px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const TextCompany = styled.h1`
  color: #fff;
  align-items: center;
  display: flex;
  font-weight: bold;
  text-decoration: none;
  font-size: 30px;

  &:hover {
    color: #e1dede;
  }
  @media screen and (min-width: 320px) and (max-width: 1000px) {
    display: none;
  }
`;
