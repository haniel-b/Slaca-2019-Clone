import React, { useState } from 'react';

import dewey_logo from '../../assets/dewey_logo.svg';
import { Container, Title, Logo, Infos, Info, Separator } from './styles';

export interface Props {
  hasClicked?: boolean;
}

const LeftVerticalBar: React.FC<Props> = hasClicked => {
  const [click, setClick] = useState(false);

  return (
    <Container>
      <Title>
        <h1>SLACA 2019</h1>
      </Title>
      <Logo src={dewey_logo} alt="logo" />
      <Infos>
        <Info>Apresentação</Info>
        <Separator />
        <Info>Comitês</Info>
        <Separator />
        <Info>Autores</Info>
        <Separator />
        <Info>Eixos Temáticos</Info>
        <Separator />
        <Info
          hasClicked={click}
          onClick={() => {
            setClick(true);
          }}
        >
          Trabalhos
        </Info>
        <Separator />
        <Info>Contatos</Info>
        <Separator />
      </Infos>
    </Container>
  );
};

export default LeftVerticalBar;
