import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker';
import classes from './AddEventForm.module.scss'

class AddEventForm extends Component {
  state = {
    title: '',
    date: new Date(),
    timestamp: Date.now()
  }
  onTitleChange = (e) => {
    const value = e.target.value
    this.setState({
      title: value
    })
  }
  onDateChange = (time) => {
    // const time = value
    this.setState(() => ({
      date: time,
      timestamp: time ? time.getTime() : null
    }))
    
  }
  onEventCreate = (e) => {
    e.preventDefault()
    if (this.state.title && this.state.timestamp) {
        const newEvent = {
        title: this.state.title,
        timestamp: this.state.timestamp
      }
      this.props.onEventAdded(newEvent)
      this.setState({title: '', timestamp: null})
    } 
  }
  render() {
    return (
      <form onSubmit={this.onEventCreate} className={classes.AddEventForm}>
      <input 
        className={classes.textInput}
        onChange={this.onTitleChange} 
        value={this.state.title}
      />
      <div className={classes.datePicker}>
        <DateTimePicker 
          onChange={value => {this.onDateChange(value)}}
          value={this.state.date}
          minDate={new Date()}
        />
      </div>

      <button 
        
        disabled={!(this.state.title)} 
        className={classes.addButton}
        type="submit"
      >
        Add event
      </button>
      </form>
    )
  }
}

export default AddEventForm
