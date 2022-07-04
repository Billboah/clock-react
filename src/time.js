import React from 'react';
import { useEffect, useState } from 'react';
import icon1 from './icon-sun.svg';
import icon2 from './icon-moon.svg';

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [city, setCity] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const res = await fetch(
      `https://api.ipbase.com/v1/json?apikey=uGcwUz9eFc7rkSnddXauHyqnVmp0VXbZaE1QEiFA`
    );
    const json = await res.json();
    setCity('in ' + json.city + ', ' + json.country_code);
  }

  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let icon = icon1;
  let period = '';
  let day = '';
  const [bodyBackground, setBodyBackground] = useState(
    'background-image: url(https://free4kwallpapers.com/uploads/originals/2015/11/03/a-beautiful-sunny-day-wallpaper.jpg)'
  );

  useEffect(() => {
    if (hour < 9 && hour >= 5) {
      setBodyBackground(
        'background-image: url(https://static.vecteezy.com/system/resources/previews/004/770/331/large_2x/sunset-and-orange-cloud-and-blue-dawn-sky-with-cloud-horizontal-lines-motion-effect-on-background-from-sunshine-free-photo.jpg)'
      );
    } else if (hour < 16 && hour >= 9) {
      setBodyBackground(
        ' background-image: url(https://free4kwallpapers.com/uploads/originals/2015/11/03/a-beautiful-sunny-day-wallpaper.jpg)'
      );
    } else if (hour < 18 && hour >= 16) {
      setBodyBackground(' background-image: url(https://wallpaperaccess.com/full/1131217.jpg)');
    } else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour < 5)) {
      setBodyBackground('background-image: url(https://wallpaperaccess.com/full/1320623.jpg)');
    } else {
      setBodyBackground(' background-image: url(https://wallpaperaccess.com/full/1685406.jpg)');
    }
  }, [hour]);
  if (hour < 12 && hour >= 0) {
    day = 'GOOD MORNING,';
  } else if (hour < 18 && hour >= 12) {
    day = 'GOOD AFTERNOON,';
  } else {
    day = 'GOOD EVENING,';
  }
  if (hour < 18 && hour >= 6) {
    icon = icon1;
  } else {
    icon = icon2;
  }
  if (hour < 12) {
    period = 'AM';
  } else {
    period = 'PM';
  }
  if (hour >= 12) {
    hour = hour % 12;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  document.querySelector('body').style = bodyBackground;

  return (
    <section>
      <div className="sections">
        <div className="day">
          <span>
            <img src={icon} className="icon" alt="icon" />
          </span>
          <span className="day_time"> {day} </span>
          <span>IT&apos;S CURRENTLY</span>
        </div>
        <div className="time">
          <div className="hour-mun">
            <span className="hours">{hour}</span>
            <span className="hours">:</span>
            <span className="hours">{minute}</span>
          </div>
          <div className="per-sec">
            <span className="second">
              <div className="period">{period}</div>
              <div className="seconds">{second}</div>
            </span>
          </div>
        </div>
      </div>
      <div className="sections location">
        <div className="city">{city}</div>
      </div>
    </section>
  );
};

export default Time;
