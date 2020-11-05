import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fdf1eb;
  width: 100%;
  padding: 0 36px;
`;

export const TitlesContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #725c5c;
  flex-direction: column;
  padding: 23px 0 19px 0;

  h2 {
    font-size: 14px;
  }

  h1 {
    font-size: 22px;
  }

  @media (max-width: 1425px) {
    h2 {
      font-size: 10px;
    }

    h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 990px) {
    white-space: nowrap;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97px;
  height: 34px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  background: transparent;
  font-family: Quicksand;

  margin: 8px 24px 8px 31px;

  img {
    margin-left: 2px;
    margin-bottom: 3px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;

    span {
      font-size: 12px;
    }

    h3 {
      font-size: 14px;
    }
  }

  img {
    margin-left: 3px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
