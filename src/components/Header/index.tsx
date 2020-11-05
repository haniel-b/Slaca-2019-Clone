import React from 'react';

import language from '../../assets/language_logo.svg';
import dropdown from '../../assets/dropdown_logo.svg';
import profile from '../../assets/profile_image.svg';

import { Container, TitlesContainer, Button, Profile } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <TitlesContainer>
        <h2>Anais do Simpósio Latino Americano de Ciências de Alimentos</h2>
        <h1>Anais do 13° Simpósio Latino Americano de Ciência de Alimentos</h1>
        <h2>ISSN: 1234-5678</h2>
      </TitlesContainer>

      <Button>
        <img src={language} alt="language-logo" />
        <span>PT, BR</span>
        <img src={dropdown} alt="dropdown-logo" />
      </Button>

      <Profile>
        <div>
          <h3>Bem vindo!</h3>
          <span>alguem12@galoascience.com</span>
        </div>
        <img src={profile} alt="profile" />
      </Profile>
    </Container>
  );
};

export default Header;
