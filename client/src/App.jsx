import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router';

function App() {

  return (
    <>
      <section className='mt-5'>
        <Link to='signup'>Signup</Link>
        <br />
        <Link to='login' replace={true}>Login</Link>
        <br />
        <Link to='flex'>Flex</Link>
        <br />
        <Link to='routing/m123?keyword=iPhone&capacity=256GB'>Routing</Link>
        <br />
        <Link to='parent/child1'>Child1</Link>
      </section>


      <Outlet />
    </>
  )
}

export default App
