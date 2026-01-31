import React from 'react'
import { Link, Outlet } from 'react-router'

export const Child1 = () => {
    return (
        <div>Child 1</div>
    )
}

export const Child2 = () => {
    return (
        <div>Child 2</div>
    )
}

export const Child3 = () => {
    return (
        <div>Child 3</div>
    )
}

const Parent = ({children}) => {
    console.log("🚀 ~ Parent ~ children:", children)
    // relative vs absolute paths
    return (
        <>
            <div>Parent</div>
            <Link to="child1">Child 1</Link>
            <br />
            <Link to="child2">Child 2</Link>
            <br />
            <Link to="child3">Child 3</Link>
            
            <Link to="/signup">Signup</Link>
            <Outlet />
        </>
    )
}

export default Parent