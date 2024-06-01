import Tooltip from './components/Tooltip';
import './App.css';
import { useRef, useState } from 'react';
import { Position } from './components/Tooltip';
import useTooltip from './components/Tooltip/useTooltip';

function App() {

  const tooltip = useTooltip();
  const tooltipEl = useRef();
  const [position, setPosition] = useState(Position.TOP);

  const handleChange = (event) => {
    setPosition(+event.target.value);
  }
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
      <Tooltip ref={tooltipEl} position={position} content="Hello!! I am a tooltip message">
         <span>TOOLTIP DEMO</span>
      </Tooltip>
      <div style={{marginTop: '200px'}}>
        <select name="position" onChange={handleChange} value={position}>
          <option value={Position.TOP}>TOP</option>
          <option value={Position.BOTTOM}>BOTTOM</option>
          <option value={Position.LEFT}>LEFT</option>
          <option value={Position.RIGHT}>RIGHT</option>
          <option value={Position.TOP_RIGHT}>TOP RIGHT</option>
          <option value={Position.TOP_LEFT}>TOP LEFT</option>
          <option value={Position.BOTTOM_LEFT}>BOTTOM LEFT</option>
          <option value={Position.BOTTOM_RIGHT}>BOTTOM RIGHT</option>
        </select>
        <button onClick={() => tooltip(tooltipEl).open(position)}>SHOW TOOLTIP</button>
      </div>
    </div>
  );
}

export default App;
