import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString();

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Digital Clock</h1>
        <div style={styles.time}>{formattedTime}</div>
        <div style={styles.date}>{formattedDate}</div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  container: {
    fontSize: '3em',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '20px',
    border: '5px solid black',
    width: '500px',
  },
  heading: {
    margin: '0 0 20px 0',
  },
  time: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.7em',
    marginTop: '10px',
    color: 'black',
  },
};

export default DigitalClock;