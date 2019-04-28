import * as React from 'react';

import { StyledDiv } from './Backdrop.style';

const Backdrop: React.FunctionComponent = (): JSX.Element => {
  return <StyledDiv data-testid="backdrop" />;
};

export default Backdrop;
