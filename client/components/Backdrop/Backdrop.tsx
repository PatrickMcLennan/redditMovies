import * as React from 'react';

import { StyledDiv } from './Backdrop.style';
import { emptyMovie } from '../../utils/testDummies';

interface IProps {
  jumboTron: boolean;
  onClick: Function;
}

const Backdrop: React.FunctionComponent<IProps> = (jumboTron): JSX.Element => {
  return <StyledDiv data-testid="backdrop" jumboTron={jumboTron} />;
};

export default Backdrop;
