import React, { useEffect, useState } from 'react';

const Detail = () => {
  const [timezone, setTimeZone] = useState('Ghana');
  const [dayOfWeek, setDayOfWeek] = useState('200');
  const [weekNumber, setWeekNumber] = useState('16');
  const [dayOfYear, setDayOfYear] = useState('3');

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    const res = await fetch(`https://worldtimeapi.org/api/ip`);
    const json = await res.json();
    setTimeZone(json.timezone);
    setDayOfYear(json.day_of_year);
    setDayOfWeek(json.day_of_week);
    setWeekNumber(json.week_number);
  }

  return (
    <div className="details">
      <article>
        <ul>
          <li>
            <h2>Current timezone</h2>
            <p>{timezone}</p>
          </li>
          <li>
            <h2>Day of the year</h2>
            <p>{dayOfYear}</p>
          </li>
          <li>
            <h2>Day of the week</h2>
            <p>{dayOfWeek}</p>
          </li>
          <li>
            <h2>Week number</h2>
            <p>{weekNumber}</p>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Detail;
