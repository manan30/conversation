import React, { Component } from 'react';

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    };
  }

  componentDidMount() {}

  render() {
    const { loading, data } = this.state;
    console.log(data);
    return loading && <div />;
  }
}

export default ChatList;
