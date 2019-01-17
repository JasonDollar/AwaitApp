import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker';
import classes from './AddEventForm.module.scss'

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
    const time = value
    this.setState(() => ({
      date: time,
      timestamp: time ? time.getTime() : null
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
      <div className={classes.AddEventForm}>
      <input 
        className={classes.textInput}
        onChange={this.onTitleChange} 
        value={this.state.value}
      />
      <div className={classes.datePicker}>
        <DateTimePicker 
          onChange={value => {this.onDateChange(value)}}
          value={this.state.date}
          minDate={new Date()}
        />
      </div>

      <button 
        onClick={this.onEventCreate}
        disabled={!(this.state.title)} 
        className={classes.addButton}
      
      >
        Add event
      </button>
      </div>
    )
  }
}

export default AddEventForm
