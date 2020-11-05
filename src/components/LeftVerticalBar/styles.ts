import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div`
  grid-area: LVB;

  display: flex;
  flex-direction: column;
  align-items: left;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffb354 0%, #ee7a3a 100%);
  padding: 0 22px;
  min-height: 68px;
  width: 100%;

  h1 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 30px;
    color: #ffffff;
  }
`;

export const Logo = styled.img`
  width: 220px;
  height: 258px;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

export const Info = styled.span<Props>`
  font-size: 13px;
  line-height: 19px;
  color: #725c5c;
  padding: 7px 97px 7px 24px;

  background: ${props => (props.hasClicked ? '#FDF1EB' : '#ffffff')};
  border-left: ${props => (props.hasClicked ? '5px solid #ED7839' : 0)};

  cursor: pointer;
`;

export const Separator = styled.div`
  display: flex;

  height: 2px;
  background: #e7e7e7;
`;
