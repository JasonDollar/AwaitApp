import React, { Component } from 'react';
import Header from './components/Header/Header'
import EventList from './components/EventList/EventList'
// import moment from 'moment'
import AddEventForm from './components/AddEventForm/AddEventForm';

class App extends Component {
  state = {
    events: [
      
    ]
  }
  onEventAdded = (e) => {
    this.setState((prevState) => ({
      events: [...prevState.events, e]
    }))
  }
  onClick = () => {
    const item = {title: 'qwe', timestamp: 1548050854924}
    this.onEventAdded(item)
  }
  render() {
    return (
      <div>
        <Header />
        <AddEventForm onEventAdded={this.onEventAdded}/>
        <EventList events={this.state.events}/>
        <button onClick={this.onClick}>Add</button>
      </div>
    )
  }
}

export default App;
/*{
  title: 'RDR2',
  timestamp: 1548050856924
} */