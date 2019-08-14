import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Nextjs starter template!'
    };
  }

  render() {
    const { title } = this.state;
    return <div>{title}</div>;
  }
}

export default Index;
