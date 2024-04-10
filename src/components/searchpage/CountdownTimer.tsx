import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useNavigate } from 'react-router-dom'; 

const TimerDisplay = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1.2rem',
    color: 'white', 
    backgroundColor: '#9794b7', 
    padding: '6px',
    justifyContent: 'center',
    marginTop: '6px',
    marginBottom: '6px',
    
});

const TimerIcon = styled(AccessAlarmIcon)({
    fontSize: '1.6rem',
    color: 'white', 
});

interface CountdownTimerProps {
    navigateTo: string;
    endTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ navigateTo, endTime }) => {
    const [timeLeft, setTimeLeft] = useState(endTime);
    const navigate = useNavigate(); 

    useEffect(() => {
      const storedStartTime = localStorage.getItem('startTime');
      let startTime = storedStartTime ? parseInt(storedStartTime) : Date.now();
  
      const remainingTime = endTime - ((Date.now() - startTime) / 1000);
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
  
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            clearInterval(timerId);
            localStorage.removeItem('startTime');
            navigate(navigateTo);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
  
      if (!storedStartTime) {
        localStorage.setItem('startTime', startTime.toString());
      }
  
      return () => clearInterval(timerId);
    }, [navigate, navigateTo, endTime]);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);

    return (
        <TimerDisplay>
            <TimerIcon />
            {minutes} Minutes {seconds} Seconds left to complete checkout!
        </TimerDisplay>
    );
};

export default CountdownTimer;



