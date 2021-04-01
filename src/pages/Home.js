import { React, useState, useEffect } from 'react';
import TimezoneSelect from 'react-timezone-select';
import AnalogClock from 'analog-clock-react';


const Home = (props) => {
  const [ timezone, setTimezone] = useState('');
  const [ time, setTime ] = useState({ hours: 0, minutes: 0, seconds: 0})

  /**
   * handle submit for form
   * @param {Event} e form event
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTimezones([...props.timezones, timezone])
  }


  useEffect(() => {
    // updating clock
    const updateClock = () => {
      // get a time string for current time and setting timezone state with it the 
      // timezone object is a date function built in to js
      const timeString = new Date().toLocaleString('en-US', { 
        timeZone: timezone.value 
      });
      // updating time state with current date information that is being passed from above and turning it back into an object 
      // 
      const dateTime = new Date(timeString);
      setTime({
        hours: dateTime.getHours(),
        minutes: dateTime.getMinutes(),
        seconds: dateTime.getSeconds(),
      })
    }
    // set up interval and store reference in variable so that we can clear interval
    const interval = setInterval(() => {
      updateClock();
    }, 1000);
    // clean up function
    return () => {
      clearInterval(interval)
    }
  }, [timezone])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TimezoneSelect value={timezone} onChange={setTimezone}/>
        <button type="submit">Select Timezone</button>
      </form>
      {timezone && <AnalogClock useCustomTime {...time}/>}
      
    </div>
  )
}

export default Home
