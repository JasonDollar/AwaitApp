import React, { Component } from 'react';
import Header from './components/Header/Header'
import EventList from './components/EventList/EventList'
import moment from 'moment'

class App extends Component {
  state = {
    events: [
      {
        title: 'RDR2',
        timestamp: 1948050856924
      }
    ]
  }
  render() {
    return (
      <div>
        <Header />
        <EventList events={this.state.events}/>
      </div>
    )
  }
}

export default App;
