import React from 'react';
import '../styles/components/clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.setTime = this.setTime.bind(this);
  }

  // http://stackoverflow.com/questions/32880484/react-js-live-clock-update
  setTime(currentDate){
    // getTimezoneOffset returns minutes, so divide by 60 to get hours
    let hours = currentDate.getUTCHours() - (currentDate.getTimezoneOffset()/60);

    // correct for number over 24, and negatives
    if( hours >= 24 ){ hours -= 24; }
    if( hours < 0   ){ hours += 24; }

    // add leading zero, first convert hours to string
    hours = hours + "";
    if( hours.length == 1 ){ hours = "0" + hours; }

    // minutes are the same on every time zone
    let minutes = currentDate.getUTCMinutes();

    // add leading zero, first convert minutes to string
    minutes = minutes + "";
    if( minutes.length == 1 ){ minutes = "0" + minutes; }

    this.setState({
      hours: parseInt(hours),
      minutes: parseInt(minutes)
    });
  }

  componentWillMount(){
    this.setTime(new Date());
  }

  componentDidMount(){
     window.setInterval(function () {
      this.setTime(new Date());
    }.bind(this), 1000);
  }

  render() {
    return (
      <div className='clock'>
        {this.state.hours}:{this.state.minutes}
      </div>
    );
  }
}

export default Clock;
