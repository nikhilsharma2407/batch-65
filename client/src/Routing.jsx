import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router'
import Login from './Login';

const Routing = () => {
  const { pathname, search } = useLocation(); //http://localhost:5173/routing/m123?keyword=iPhone&capacity=256GB pathname - /routing/m123
  // search - ?keyword=iPhone&capacity=256GB
  const params = useParams();
  // productId - m123

  const [searchParams, setSearchParams] = useSearchParams();
  // search params - keyword - iPhone
  // search params - capacity - 128gb

  const navigate = useNavigate();

  console.log("🚀 ~ Routing ~ searchParams:", searchParams, [...searchParams.entries()])

  console.log("🚀 ~ Routing ~ params:", params);
  return (
    <>
      <div>Routing - pathname - {pathname}</div>
      <div>Routing - search - {search}</div>
      <div>Routing - productId - {params.productId}</div>

      <h3>Search Params</h3>
      <div>search params - keyword  - {searchParams.get('keyword')}</div>
      <div>search params - capacity  - {searchParams.get('capacity')}</div>

      <input type="text" onChange={(e) => setSearchParams({ keyword: e.target.value })} />


      <section className='mt-2'>
        <Button onClick={() => navigate('/login', { state: { from: pathname } })} variant="outline-primary">go to login</Button>
      </section>

    </>
  )
}

export default Routing
