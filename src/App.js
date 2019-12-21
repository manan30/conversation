import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ChatListView from './views/ChatList';
// import ChatRoom from './views/ChatRoom';

function App() {
  return (
    <Router>
      <Route path='/' component={ChatListView} exact />
      {/* <Route path='/:id' component={ChatRoom} exact /> */}
    </Router>
  );
}

export default App;
