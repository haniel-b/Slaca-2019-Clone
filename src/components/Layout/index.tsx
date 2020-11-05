import React from 'react';
import Header from '../Header';
import LeftVerticalBar from '../LeftVerticalBar';
import Body from '../Body';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <LeftVerticalBar />
      <Header />
      <Body />
    </Grid>
  );
};

export default Layout;
