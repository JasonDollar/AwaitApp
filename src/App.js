import React, { Component } from 'react';
import Header from './components/Header/Header'
import EventList from './components/EventList/EventList'
import AddEventForm from './components/AddEventForm/AddEventForm';

import classes from './App.module.css'

class App extends Component {
  state = {
    events: [{
      title: 'RDR2',
      timestamp: 1548050856924
    }]
  }
  onEventAdded = (newEvent) => {
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent]
    }))
  }
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <AddEventForm onEventAdded={this.onEventAdded}/>
        <EventList events={this.state.events}/>
      </div>
    )
  }
}

export default App;
