import * as React from 'react';

interface IProps {
  theToggler: Function;
}

class Grid extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { theToggler } = this.props;
    return (
      <div>
        <h1>hello from grid</h1>
      </div>
    );
  }
}

export default Grid;
