import react from 'react';

export default class GridCell extends React.Component {
  constructor(props) {
    super(props);

    const { cellValue } = this.props;

    this.state = {
      visited: false,
      value: cellValue
    }
  }

  render() {
    return ({});
  }
}