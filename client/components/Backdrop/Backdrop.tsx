import * as React from 'react';

import { StyledDiv } from './Backdrop.style';

interface IProps {
  jumboTron: boolean;
}

const Backdrop: React.FunctionComponent<IProps> = (jumboTron): JSX.Element => {
  return <StyledDiv jumboTron={jumboTron} />;
};
