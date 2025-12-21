import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import Products from './Products';
import FlexBox from './FlexBox';

function App() {
  const name = 'GfG';
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {/* {showComponent ? <FunctionalComponent name={name} showComponent={showComponent} /> : null}
      <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'Hide' : 'Show'} Component</button> */}

      <FlexBox />
      {/* <Products /> */}
      {/* <FunctionalComponent/> */}
    </>
  )
}

export default App
