import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const name = 'GfG';
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {showComponent ? <FunctionalComponent name={name} showComponent={showComponent} /> : null}
      <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'Hide' : 'Show'} Component</button>
    </>
  )
}

export default App
