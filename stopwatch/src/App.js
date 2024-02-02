import { useTimer } from 'use-timer';
import './App.css';

function App() {

  const {time,start,pause,reset,status}=useTimer();

  return (
    <div className="App">
    <div className='up'>
      <p>Start Timer: {time}</p>
      {status=== 'RUNNING' && <p className='r'>RUNNING...</p>}
    </div>

    <div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>

    </div>
  );
}

export default App;
