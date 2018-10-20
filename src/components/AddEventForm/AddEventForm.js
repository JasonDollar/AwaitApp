import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker';

class AddEventForm extends Component {
  state = {
    title: '',
    date: new Date(),
    timestamp: null
  }
  onTitleChange = (e) => {
    const value = e.target.value
    this.setState({
      title: value
    })
  }
  onDateChange = (value) => {
    // this.setState({
    //   date: value.getTime()
    // })
    const time = value
    this.setState(() => ({
      date: time,
      timestamp: time.getTime()
    }))
  }
  onEventCreate = () => {
    if (this.state.title && this.state.timestamp) {
        const newEvent = {
        title: this.state.title,
        timestamp: this.state.timestamp
      }
      this.props.onEventAdded(newEvent)
    }
  }
  render() {
    return (
      <div>
      <input onChange={this.onTitleChange} value={this.state.value}/>
      <DateTimePicker 
        onChange={value => {this.onDateChange(value)}}
        value={this.state.date}
      />

      <button onClick={this.onEventCreate}>Add event</button>
      </div>
    )
  }
}

export default AddEventForm
