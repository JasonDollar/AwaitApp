import React from 'react'



class EventItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  


  calcDate = (date_future) => {
    
    let date_now = Date.now()
    let delta = Math.abs(date_future - date_now) / 1000;

    // calculate (and subtract) whole days
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    let seconds = delta % 60;
    
    this.setState(() => ({
      timeLeft: `${days}days ${hours}hours ${minutes}minutes ${Math.floor(seconds)}seconds` 
    }))
  }

  componentDidMount() {
    this.calcDate(this.props.time)
    this.interval = setInterval(() => {
      this.calcDate(this.props.time)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  


  // const timeLeft = moment(props.time - now).format('YY DDD H mm ss')
  
  
  render() {
    return (
      <div>
        {this.props.title}{' '}
        
        {this.state.timeLeft}
      </div>
    )
  }
}



export default EventItem